import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedTable,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { Table } from "../../../../APIs/Restaurant";

export default function DeleteTableModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedTable = useSelector(selectedTable);

  const open = useSelector((state) => state.manageFood.openDeleteTableModal);

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeleteTableModal",
        value: false,
      })
    );
  }

  async function deleteTable() {
    setIsLoading(true);
    const response = await Table.delete($selectedTable.id);
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
        message: "You want to delete this table?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deleteTable}
      isLoading={isLoading}
    />
  );
}
