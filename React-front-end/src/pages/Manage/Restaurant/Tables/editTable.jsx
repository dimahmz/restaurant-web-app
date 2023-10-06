import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../../../APIs/Restaurant";
import {
  selectedTable,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";
import SelectOption from "../../../../components/SelectOption";

export default function EditTable({ branches, refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedTable = useSelector(selectedTable);

  const open = useSelector((state) => state.manageFood.openEditTableModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditTableModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changeTableName] = useState($selectedTable.name);
  const [capacity, changeCapacity] = useState($selectedTable.capacity);
  const [branch_id, setSelectedBranchId] = useState(null);

  useEffect(() => {
    changeTableName($selectedTable.name);
  }, [$selectedTable]);

  async function updateTable() {
    // don't send request if the name dosen't change
    if (
      name == $selectedTable.name &&
      capacity == $selectedTable.capacity &&
      branch_id == $selectedTable.branch_id
    ) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await Table.update({
      id: $selectedTable.id,
      branch_id,
      name,
      capacity,
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
      labels={{ title: "Edit Table" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updateTable}
      isLoading={isLoading}
    >
      <div className="px-4">
        <div className="py-3 flex-col space-y-4">
          <label htmlFor="new-Table-name">Name</label>
          <TextField
            name="payment-name"
            fullWidth
            hiddenLabel
            defaultValue={$selectedTable?.name}
            size="small"
            variant="filled"
            onChange={(e) => changeTableName(e.target.value)}
            required
          />
        </div>
        <div className="flex-column space-y-4 py-3 ">
          <label htmlFor="">Select Branch</label>
          <div>
            <span className="bg-[#0dd19d] py-2 px-6 text-center rounded-sm ">
              {$selectedTable?.branch?.name}
            </span>
          </div>
          <SelectOption
            options={branches}
            onSelectOption={(id) => setSelectedBranchId(id)}
            label="Select a branch"
            selectedOption=""
          />
        </div>
        <div className="flex-column space-y-4 py-3 ">
          <label htmlFor="capacity">capacity</label>
          <TextField
            name="capacity"
            type="number"
            fullWidth
            hiddenLabel
            defaultValue={capacity}
            size="small"
            variant="filled"
            required
            onChange={(e) => changeCapacity(e.target.value)}
          />
        </div>
      </div>
    </FormModal>
  );
}
