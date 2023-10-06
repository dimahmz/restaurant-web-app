import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedBranch,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { Branch } from "../../../../APIs/Restaurant";

export default function DeleteBranchModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedBranch = useSelector(selectedBranch);

  const open = useSelector((state) => state.manageFood.openDeleteBranchModal);

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteBranchModal",
        value: false,
      })
    );
  }

  async function deleteBranch() {
    setIsLoading(true);
    const response = await Branch.delete($selectedBranch.id);
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
        message: "You want to delete this Branch?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteBranch}
      isLoading={isLoading}
    />
  );
}
