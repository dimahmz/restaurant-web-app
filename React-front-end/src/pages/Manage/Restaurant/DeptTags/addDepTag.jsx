import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { DeptTag } from "../../../../APIs/Restaurant";

export default function AddDepTag({ refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const openModal = useSelector(
    (state) => state.manageFood.openAddDeptTagModal
  );

  const [name, setName] = useState("");
  const [commission, setCommission] = useState(0);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddDeptTagModal", value: false })
    );
  }
  async function addDeptTag() {
    setIsLoading(true);
    const response = await DeptTag.create({ name, commission });
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
      onSubmitForm={addDeptTag}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="DepTag_name">Name</label>
        <TextField
          required
          name="DepTag_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="commission">Commission (%)</label>
        <TextField
          required
          type="number"
          min={0}
          name="commission"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          defaultValue={0}
          onChange={(e) => setCommission(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
