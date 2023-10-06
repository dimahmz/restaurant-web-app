import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedFood,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { Food } from "../../../../APIs/Food";

export default function DeleteFoodModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedFood = useSelector(selectedFood);

  const open = useSelector((state) => state.manageFood.openDeleteItemModal);

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteItemModal",
        value: false,
      })
    );
  }

  async function deleteFood() {
    setIsLoading(true);
    const response = await Food.delete($selectedFood.id);
    serverResponse(response);
    if (response.success) {
      refresh();
      setIsLoading(false);
      handleClose();
    }
    setIsLoading(false);
  }
  return (
    <ConfirmDeleteModal
      labels={{
        message: "You want to delete this Food?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteFood}
      isLoading={isLoading}
    />
  );
}
