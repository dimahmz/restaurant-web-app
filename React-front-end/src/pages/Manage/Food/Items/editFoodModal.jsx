import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { TextField } from "@mui/material";
import SelectOption from "../../../../components/SelectOption";
import { Checkbox } from "@material-tailwind/react";
import { toggle_edit_food_modal } from "../../../../stores/manageFood";
import { useState } from "react";

export default function EditFoodModal({ foodGroups, refresh }) {
  const dispatch = useDispatch();

  const selected_food = useSelector((state) => state.manageFood.selectedFood);

  const openEditFoodModal = useSelector(
    (state) => state.manageFood.openEditFoodModal
  );

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(selected_food?.name);
  const [price, setPrice] = useState(selected_food?.price);
  const [is_special, setIsSpecial] = useState(selected_food?.is_special);
  const [food_group_id, setSelectedGoupID] = useState(
    selected_food?.group?.name
  );

  function updateFoodItem() {
    const id = selected_food?.id;
    // {
    //   id,
    //   price,
    //   name,
    //   is_special,
    //   food_group_id,
    // }
    setIsLoading(true);
    setIsLoading(false);
    refresh();
  }

  // @TODO think of a methid that dosen't iterate throughtout the hole array
  // intead stops when if finds the desired element

  const $foodGroups = foodGroups.filter((row) => {
    return row.id != selected_food?.group?.id;
  });

  return (
    <FormModal
      labels={{ title: `Update ${selected_food.name}` }}
      open={openEditFoodModal}
      handleClose={() => dispatch(toggle_edit_food_modal(false))}
      onSubmitForm={updateFoodItem}
      isLoading={isLoading}
    >
      <div className="py-5 px-4 flex-col space-y-4">
        <div className="flex  items-center space-x-12">
          <p>Selected Group</p>
          <p className="text-sm bg-[#0dd19d] text-[#121063] py-1 px-5 rounded-sm">
            {selected_food?.group?.name || "-"}
          </p>
        </div>
        <SelectOption
          options={$foodGroups}
          onSelectOption={(id) => setSelectedGoupID(id)}
          label="Select a group"
          selectedOption=""
        />
        <div className="flex-column">
          <label htmlFor="name">Name</label>
          <TextField
            required
            name="name"
            fullWidth
            hiddenLabel
            value={selected_food?.name}
            size="small"
            variant="filled"
            // onChange={}
          />
        </div>
        <div className="flex-column">
          <label className="font-semibold">
            Price
            <span className="text-[#158df7] font-normal">
              (Enter price in MAD)
            </span>
          </label>
          <TextField
            hiddenLabel
            size="small"
            type="number"
            variant="filled"
            placeholder="e.g Type price of this item"
            value={selected_food?.price}
            min={1}
            required
            // onChange={}
          />
        </div>
        <div className="flex items-center">
          <Checkbox
            color="pink"
            defaultChecked={selected_food?.is_special ? true : false}
            // onChange={}
          />
          <label htmlFor="">is special</label>
        </div>
      </div>
    </FormModal>
  );
}
