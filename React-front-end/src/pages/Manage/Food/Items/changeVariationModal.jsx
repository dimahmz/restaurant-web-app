import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_edit_modal } from "../../../../stores/manageFood";
import { useState } from "react";
import { Food } from "../../../../APIs/Food";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export default function ChangeVariationModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const selectedFood = useSelector((state) => state.manageFood.selectedFood);
  const [foodVariations, setFoodVariations] = useState([]);

  const openModal = useSelector(
    (state) => state.manageFood.openChangeFoodVariationModal
  );

  function closeModal() {
    dispatch(
      toggle_edit_modal({ name: "openChangeFoodVariationModal", value: false })
    );
  }

  useEffect(() => {
    setFoodVariations([]);
    const $foodVariations = selectedFood?.variations?.map((variation) => ({
      variation_id: variation.id,
      food_id: variation.pivot.food_id,
      price: variation.pivot.price,
    }));
    setFoodVariations($foodVariations);
  }, [selectedFood]);

  function changeFoodVariation(variation, newPrice) {
    const $foodVariation = foodVariations?.map((foodVariation) => {
      if (variation.id == foodVariation.variation_id) {
        return { ...foodVariation, price: newPrice };
      }
      return foodVariation;
    });
    setFoodVariations($foodVariation);
    console.log($foodVariation);
  }

  async function updateVariation() {
    setIsLoading(true);
    const response = await Food.editVariations({
      food_variations: foodVariations,
    });
    serverResponse(response);
    if (response.success) {
      closeModal();
      refresh();
    }
    setIsLoading(false);
  }

  return (
    <FormModal
      labels={{ title: `${selectedFood.name}` }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={updateVariation}
      isLoading={isLoading}
    >
      <div className="px-4">
        <table className="w-full order-detail border-collapse my-9">
          <tr className="text-center border border-[#dee2e6] py-3">
            <td>S/L</td>
            <td>Variation name</td>
            <td>Price</td>
          </tr>
          {selectedFood?.variations?.map((variation, index) => (
            <tr
              key={index}
              className="border border-[#dee2e6] text-center py-1"
            >
              <td className="w-[10%]">{index + 1}</td>
              <td className="w-[60%]">{variation.name}</td>
              <td className="w-[30%] p-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "6px",
                    },
                  }}
                  hiddenLabel
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  name="price"
                  required
                  defaultValue={variation.pivot.price}
                  size="small"
                  onChange={(e) => {
                    changeFoodVariation(variation, e.target.value);
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </FormModal>
  );
}
