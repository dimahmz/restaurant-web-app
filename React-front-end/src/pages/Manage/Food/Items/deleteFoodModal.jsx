import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import { toggle_delete_item_modal } from "../../../../stores/manageFood";
import { useState } from "react";
import { Food } from "../../../../APIs/Food";

export default function DeleteFoodItemModal({ refresh }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const selected_food = useSelector((state) => state.manageFood.selectedFood);
  const open = useSelector((state) => state.manageFood.openDeleteItemModal);

  function handleClose() {
    dispatch(toggle_delete_item_modal(false));
  }

  async function deleteFood() {
    setIsLoading(true);
    const response = await Food.delete(selected_food.id);
    if (response.success) {
      await refresh();
      setIsLoading(false);
      dispatch(toggle_delete_item_modal(true));
    } else {
      window.alert("an error occurred please try again later");
    }
    setIsLoading(false);
    handleClose();
  }
  return (
    <ConfirmDeleteModal
      labels={{
        message: "You want to delete this food?",
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
