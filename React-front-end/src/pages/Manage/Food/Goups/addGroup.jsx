import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { toggle_add_item_modal } from "../../../../stores/manageFood";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Group } from "../../../../APIs/Food";

export default function AddGroup({ refresh, serverResponse }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const openModal = useSelector((state) => state.manageFood.openAddGroupModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openAddGroupModal", value: false })
    );
  }
  async function addGroup() {
    setIsLoading(true);
    const response = await Group.create(name);
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }
  return (
    <FormModal
      labels={{ title: "Add new Group" }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={addGroup}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="Group_name">Name</label>
        <TextField
          required
          name="Group_name"
          fullWidth
          hiddenLabel
          placeholder="e.g Burger, Chiken"
          size="small"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
