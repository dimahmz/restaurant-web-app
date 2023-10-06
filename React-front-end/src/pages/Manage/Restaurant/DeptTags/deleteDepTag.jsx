import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedDeptTag,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { DeptTag } from "../../../../APIs/Restaurant";

export default function DeleteDeptTagModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedDeptTag = useSelector(selectedDeptTag);

  const open = useSelector((state) => state.manageFood.openDeleteDeptTagModal);

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteDeptTagModal",
        value: false,
      })
    );
  }

  async function deleteDeptTag() {
    setIsLoading(true);
    const response = await DeptTag.delete($selectedDeptTag.id);
    serverResponse(response);
    if (response.success) {
      handleClose();
      setIsLoading(false);
      refresh();
    }
    setIsLoading(false);
  }
  return (
    <ConfirmDeleteModal
      labels={{
        message: "You want to delete this payment type?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteDeptTag}
      isLoading={isLoading}
    />
  );
}
