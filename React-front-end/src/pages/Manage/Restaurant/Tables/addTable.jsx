import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { Table } from "../../../../APIs/Restaurant";
import SelectOption from "../../../../components/SelectOption";

export default function AddTable({ branches, refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.manageFood.openAddTableModal);
  const [name, setName] = useState("Table");
  const [capacity, setCapacity] = useState(5);
  const [branch_id, setSelectedBranchId] = useState(null);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddTableModal", value: false })
    );
  }

  async function addTable() {
    setIsLoading(true);
    const response = await Table.create({ name, capacity, branch_id });
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }
  return (
    <FormModal
      labels={{ title: "Add new department tag" }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={addTable}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="Table_name">Name</label>
        <TextField
          required
          defaultValue={name}
          name="Table_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex-column space-y-3 py-3 px-4">
        <label htmlFor="">Add Branch</label>
        <SelectOption
          options={branches}
          onSelectOption={(id) => setSelectedBranchId(id)}
          label="Select a branch"
          selectedOption=""
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="capacity">Capacity</label>
        <TextField
          required
          type="number"
          min={3}
          name="capacity"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          defaultValue={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
