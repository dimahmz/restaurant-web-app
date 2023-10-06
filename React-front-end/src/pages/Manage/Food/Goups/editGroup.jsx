import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { Group } from "../../../../APIs/Food";
import {
  selectedGroup,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";

export default function EditGroup({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedGroup = useSelector(selectedGroup);

  const open = useSelector((state) => state.manageFood.openEditGroupModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditGroupModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changeGroupName] = useState($selectedGroup.name);
  useEffect(() => {
    changeGroupName($selectedGroup.name);
  }, [$selectedGroup]);

  async function updateGroup() {
    // don't send request if the name dosen't change
    if (name == $selectedGroup.name) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await Group.update({
      id: $selectedGroup.id,
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
      labels={{ title: "Edit Group" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updateGroup}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="new-Group-name">Name</label>
        <TextField
          name="new-Group-name"
          fullWidth
          hiddenLabel
          defaultValue={$selectedGroup?.name}
          size="small"
          variant="filled"
          onChange={(e) => changeGroupName(e.target.value)}
          required
        />
      </div>
    </FormModal>
  );
}
