import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { PaymentType } from "../../../../APIs/Restaurant";

export default function AddPaymentType({ refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const openModal = useSelector(
    (state) => state.manageFood.openAddPaymentTypeModal
  );

  const [name, setName] = useState("");
  const [unique_key, setUniqueKey] = useState("");

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddPaymentTypeModal", value: false })
    );
  }
  async function addPaymentType() {
    setIsLoading(true);
    const response = await PaymentType.create({ name, unique_key });
    serverResponse(response);
    console.log(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }
  return (
    <FormModal
      labels={{ title: "Add new payment type" }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={addPaymentType}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="PaymentType_name">Name</label>
        <TextField
          required
          name="PaymentType_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="uniqueKey_name">Unique Key</label>
        <TextField
          required
          name="uniqueKey_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setUniqueKey(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
