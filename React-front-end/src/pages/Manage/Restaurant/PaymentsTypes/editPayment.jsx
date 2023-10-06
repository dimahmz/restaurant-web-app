import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { PaymentType } from "../../../../APIs/Restaurant";
import {
  selectedPaymentType,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";

export default function EditPaymentType({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedPaymentType = useSelector(selectedPaymentType);

  const open = useSelector(
    (state) => state.manageFood.openEditPaymentTypeModal
  );

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditPaymentTypeModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changePaymentTypeName] = useState($selectedPaymentType.name);

  useEffect(() => {
    changePaymentTypeName($selectedPaymentType.name);
  }, [$selectedPaymentType]);

  async function updatePaymentType() {
    // don't send request if the name dosen't change
    if (name == $selectedPaymentType.name) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await PaymentType.update({
      id: $selectedPaymentType.id,
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
      labels={{ title: "Edit PaymentType" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updatePaymentType}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="new-PaymentType-name">Name</label>
        <TextField
          name="payment-name"
          fullWidth
          hiddenLabel
          defaultValue={$selectedPaymentType?.name}
          size="small"
          variant="filled"
          onChange={(e) => changePaymentTypeName(e.target.value)}
          required
        />
        <TextField
          name="pyament-type-key"
          fullWidth
          hiddenLabel
          value={$selectedPaymentType?.unique_key}
          disabled
          size="small"
          variant="filled"
          required
        />
      </div>
    </FormModal>
  );
}
