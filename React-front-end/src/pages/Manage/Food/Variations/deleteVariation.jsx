import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedVariation,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { Variation } from "../../../../APIs/Food";

export default function DeleteVariationModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedVariation = useSelector(selectedVariation);

  const open = useSelector(
    (state) => state.manageFood.openDeleteVariationModal
  );

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteVariationModal",
        value: false,
      })
    );
  }

  async function deleteVariation() {
    setIsLoading(true);
    const response = await Variation.delete($selectedVariation.id);
    serverResponse(response);
    if (response.success) {
      await refresh();
      setIsLoading(false);
      handleClose();
    }
    setIsLoading(false);
  }
  return (
    <ConfirmDeleteModal
      labels={{
        message: "You want to delete this Variation?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteVariation}
      isLoading={isLoading}
    />
  );
}
