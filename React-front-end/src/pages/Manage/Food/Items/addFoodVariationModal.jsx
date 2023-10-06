import { useDispatch, useSelector } from "react-redux";
import { selectedVariation } from "../../../../stores/manageFood";
import { useEffect, useState } from "react";
import FormModal from "../../../../components/FormModal";
import SelectOption from "../../../../components/SelectOption";

export default function AddFoodVariationModal({ variations, refresh }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [$variations, setVariations] = useState(variations);
  const [selectedVariationID, setSelectedVariationID] = useState(null);

  const selectedFood = useSelector(selectedVariation);

  const open = useSelector(
    (state) => state.manageFood.openAddFoodVariationModal
  );

  useEffect(() => {
    setVariations(() => {
      const variationsIDs = selectedFood?.variations?.map(
        (variation) => variation.id
      );
      const filtredVariations = $variations.filter(
        (variation) => !variationsIDs?.includes(variation.id)
      );
      return filtredVariations;
    });
  }, []);

  function handleClose() {
    // dispatch(toggle_add_food_variation_modal(false));
  }

  async function addVariation() {
    setIsLoading(true);
    setIsLoading(false);
    console.log(selectedVariationID);
    refresh();
    handleClose();
  }
  return (
    <FormModal
      labels={{ title: `Add variations for ${selectedFood.name}` }}
      open={open}
      handleClose={handleClose}
      onSubmitForm={addVariation}
      isLoading={isLoading}
    >
      <div className="flex-column space-y-3 py-8 px-4">
        <label htmlFor="">Add Variations</label>
        <SelectOption
          options={variations}
          onSelectOption={(id) => setSelectedVariationID(id)}
          label="Select a group"
          selectedOption=""
        />
      </div>
    </FormModal>
  );
}
