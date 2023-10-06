import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedGroup,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { Group } from "../../../../APIs/Food";

export default function DeleteGroupModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedGroup = useSelector(selectedGroup);

  const open = useSelector((state) => state.manageFood.openDeleteGroupModal);

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteGroupModal",
        value: false,
      })
    );
  }

  async function deleteGroup() {
    setIsLoading(true);
    const response = await Group.delete($selectedGroup.id);
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
        message: "You want to delete this Group?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteGroup}
      isLoading={isLoading}
    />
  );
}
