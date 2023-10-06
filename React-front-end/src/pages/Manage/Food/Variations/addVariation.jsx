import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Variation } from "../../../../APIs/Food";

export default function AddVariation({ refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const [name, setName] = useState(null);

  const openModal = useSelector(
    (state) => state.manageFood.openAddVariationModal
  );

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddVariationModal", value: false })
    );
  }
  async function addVariation() {
    setIsLoading(true);
    const response = await Variation.create(name);
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }
  return (
    <FormModal
      labels={{ title: "Add new Variation" }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={addVariation}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="group_name">Name</label>
        <TextField
          required
          name="group_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
