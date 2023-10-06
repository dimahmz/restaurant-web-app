import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { Branch } from "../../../../APIs/Restaurant";
import {
  selectedBranch,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";

export default function EditBranch({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedBranch = useSelector(selectedBranch);

  const open = useSelector((state) => state.manageFood.openEditBranchModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditBranchModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changeBranchName] = useState($selectedBranch.name);
  const [phone, setPhone] = useState($selectedBranch.phone);
  const [delivery_charge, setDeliveryCharge] = useState(
    $selectedBranch.delivery_charge
  );
  const [address, setAddress] = useState($selectedBranch.address);

  useEffect(() => {
    changeBranchName($selectedBranch.name);
  }, [$selectedBranch]);

  async function updateBranch() {
    // don't send request if the name dosen't change
    if (
      name == $selectedBranch.name &&
      phone == $selectedBranch.phone &&
      delivery_charge == $selectedBranch.delivery_charge &&
      address == $selectedBranch.address
    ) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await Branch.update({
      id: $selectedBranch.id,
      phone,
      name,
      delivery_charge,
      address,
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
      labels={{ title: "Edit Branch" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updateBranch}
      isLoading={isLoading}
    >
      <div className="px-4">
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
            onChange={(e) => changeBranchName(e.target.value)}
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
      </div>
    </FormModal>
  );
}
