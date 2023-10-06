import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../../components/ConfirmModal";
import {
  selectedPaymentType,
  toggle_delete_item_modal,
} from "../../../../stores/manageFood";
import { useState } from "react";
import { PaymentType } from "../../../../APIs/Restaurant";

export default function DeletePaymentTypeModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const $selectedPaymentType = useSelector(selectedPaymentType);

  const open = useSelector(
    (state) => state.manageFood.openDeletePaymentTypeModal
  );

  function handleClose() {
    dispatch(
      toggle_delete_item_modal({
        name: "openDeletePaymentTypeModal",
        value: false,
      })
    );
  }

  async function deletePaymentType() {
    setIsLoading(true);
    const response = await PaymentType.delete($selectedPaymentType.id);
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
        message: "You want to delete this payment type?",
        cancel: "No",
        submit: "Delete",
      }}
      open={open}
      handleClose={handleClose}
      onSubmitModal={deletePaymentType}
      isLoading={isLoading}
    />
  );
}
