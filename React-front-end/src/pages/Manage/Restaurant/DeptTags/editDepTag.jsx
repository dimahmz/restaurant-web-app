import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormModal from "../../../../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { DeptTag } from "../../../../APIs/Restaurant";
import {
  selectedDeptTag,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";

export default function EditDeptTag({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const $selectedDeptTag = useSelector(selectedDeptTag);

  const open = useSelector((state) => state.manageFood.openEditDeptTagModal);

  function closeModal() {
    dispatch(
      toggle_add_item_modal({ name: "openEditDeptTagModal", value: false })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, changeDeptTagName] = useState($selectedDeptTag.name);
  const [commission, changeCommission] = useState($selectedDeptTag.commission);

  useEffect(() => {
    changeDeptTagName($selectedDeptTag.name);
  }, [$selectedDeptTag]);

  async function updateDeptTag() {
    // don't send request if the name dosen't change
    if (
      name == $selectedDeptTag.name &&
      commission == $selectedDeptTag.commission
    ) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const response = await DeptTag.update({
      id: $selectedDeptTag.id,
      name,
      commission,
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
      labels={{ title: "Edit DeptTag" }}
      open={open}
      handleClose={closeModal}
      onSubmitForm={updateDeptTag}
      isLoading={isLoading}
    >
      <div className="py-3 px-4 flex-col space-y-4">
        <label htmlFor="new-DeptTag-name">Name</label>
        <TextField
          name="payment-name"
          fullWidth
          hiddenLabel
          defaultValue={$selectedDeptTag?.name}
          size="small"
          variant="filled"
          onChange={(e) => changeDeptTagName(e.target.value)}
          required
        />
        <TextField
          name="pyament-type-key"
          type="number"
          fullWidth
          hiddenLabel
          defaultValue={commission}
          size="small"
          variant="filled"
          required
          onChange={(e) => changeCommission(e.target.value)}
        />
      </div>
    </FormModal>
  );
}
