import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import {
  selectedVariation,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Variation } from "../../../../APIs/Food";

export default function EditVariation({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedVariation = useSelector(selectedVariation);

  const open = useSelector((state) => state.manageFood.openEditVariationModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditVariationModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changeVariationName] = useState($selectedVariation?.name);

  useEffect(() => {
    changeVariationName($selectedVariation.name);
  }, [$selectedVariation]);

  async function updateVariation() {
    if (name == $selectedVariation.name) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await Variation.update({
      id: $selectedVariation.id,
      name,
    });
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }

  return (
    <FormModal
      labels={{ title: "Edit Variation" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updateVariation}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="new-variation-name">Name</label>
        <TextField
          name="new-variation-name"
          fullWidth
          hiddenLabel
          defaultValue={$selectedVariation?.name}
          size="small"
          variant="filled"
          onChange={(e) => changeVariationName(e.target.value)}
          required
        />
      </div>
    </FormModal>
  );
}
