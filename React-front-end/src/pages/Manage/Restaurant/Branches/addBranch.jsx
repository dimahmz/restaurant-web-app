import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { Branch } from "../../../../APIs/Restaurant";

export default function AddBranch({ refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.manageFood.openAddBranchModal);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+212");
  const [delivery_charge, setDeliveryCharge] = useState(10);
  const [address, setAddress] = useState("");

  // setDeliveryFee

  function resetForm() {
    setName();
    setAddress();
    setPhone((prev) => prev);
    setDeliveryCharge();
    setDeliveryCharge((prev) => prev);
  }

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddBranchModal", value: false })
    );
  }
  async function addBranch() {
    setIsLoading(true);
    const response = await Branch.create({
      name,
      phone,
      delivery_charge,
      address,
    });
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
      resetForm();
    }
    setIsLoading(false);
  }
  return (
    <FormModal
      labels={{ title: "Add new department tag" }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={addBranch}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="Branch_name">Name</label>
        <TextField
          required
          name="Branch_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Branch X"
          size="small"
          variant="filled"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="phone">Address</label>
        <TextField
          required
          min={3}
          name="address"
          fullWidth
          hiddenLabel
          placeholder="e.g Meknes 30000"
          size="medium"
          variant="filled"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="phone">phone</label>
        <TextField
          required
          min={3}
          name="phone"
          fullWidth
          hiddenLabel
          placeholder="e.g +212635363633"
          size="small"
          variant="filled"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="delivery_fee">Delivery Fee</label>
        <TextField
          required
          type="number"
          min="0"
          name="delivery_fee"
          fullWidth
          hiddenLabel
          placeholder="e.g 100"
          size="small"
          variant="filled"
          defaultValue={delivery_charge}
          onChange={(e) => setDeliveryCharge(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
