import { useDispatch, useSelector } from "react-redux";
import {
  selectedFood,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";
import { useEffect, useState } from "react";
import FormModal from "../../../../components/FormModal";
import AddVariation from "./components/addVariations";
import _ from "lodash";
import { Food, Variation } from "../../../../APIs/Food";
import { CircularProgress } from "@mui/material";

export default function AddFoodVariationModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [variations, setVariations] = useState([]);
  const [isFetchLoading, setFetchLoading] = useState(false);
  const [selectedVariationID, setSelectedVariationID] = useState([]);

  const $selectedFood = useSelector(selectedFood);

  const open = useSelector(
    (state) => state.manageFood.openAddFoodVariationModal
  );

  function closeModal() {
    dispatch(
      toggle_add_item_modal({
        name: "openAddFoodVariationModal",
        value: false,
      })
    );
  }
  // add the price to the selected variation
  function getVariationsPrices(variatiosPrices) {
    const $variationsPrices = _.map(variatiosPrices, (obj) =>
      _.pick(obj, ["variation_id", "price"])
    );
    setSelectedVariationID($variationsPrices);
  }

  async function addVariation() {
    const id = $selectedFood.id;
    if (selectedVariationID.length == 0) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await Food.addVariations({
      id,
      variations_IDs: selectedVariationID,
    });
    serverResponse(response);
    if (response.success) {
      closeModal();
      refresh();
    }
    setIsLoading(false);
  }

  async function fetchVariations() {
    setFetchLoading(true);
    const response = await Variation.get();
    if (response.success) {
      const $filtred = filterVariations(response.payload);
      setVariations($filtred);
    }
    setFetchLoading(false);
  }

  function filterVariations(allVariations) {
    const foodVariationsIDs = $selectedFood?.variations?.map(
      (variation) => variation.id
    );
    const filtredVariations = allVariations.filter(
      (variation) => !foodVariationsIDs?.includes(variation.id)
    );

    return filtredVariations;
  }

  // rendre the variation that are not in the food
  useEffect(() => {
    fetchVariations();
  }, [open]);

  return (
    <FormModal
      labels={{ title: `Add variations for ${$selectedFood.name}` }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={addVariation}
      isLoading={isLoading}
    >
      {isFetchLoading ? (
        <div className="flex-center w-full min-h-[50vh]">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div className="flex-column space-y-3 py-8 px-4">
          <label className="pl-3 text-lg">Add Variations</label>
          <AddVariation
            foodVariations={variations}
            addVariationPrice={getVariationsPrices}
          />
        </div>
      )}
    </FormModal>
  );
}
