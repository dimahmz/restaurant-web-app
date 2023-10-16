import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { TextField } from "@mui/material";
import SelectOption from "../../../../components/SelectOption";
import { Checkbox } from "@material-tailwind/react";
// import { toggle_edit_food_modal } from "../../../../stores/manageFood";
import { useEffect, useState } from "react";
import { toggle_edit_modal } from "../../../../stores/manageFood";
import { Food } from "../../../../APIs/Food";

export default function EditFoodModal({ foodGroups, refresh, serverResponse }) {
  const dispatch = useDispatch();

  const selected_food = useSelector((state) => state.manageFood.selectedFood);

  const openModal = useSelector(
    (state) => state.manageFood.openEditFoodItemModal
  );

  function closeModal() {
    dispatch(
      toggle_edit_modal({
        name: "openEditFoodItemModal",
        value: false,
      })
    );
  }

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(selected_food.name);
  const [price, setPrice] = useState(selected_food.price);
  const [is_special, setIsSpecial] = useState(selected_food.is_special);
  const [food_group_id, setSelectedGoupID] = useState(selected_food.group?.id);

  useEffect(() => {
    setName(selected_food.name);
    setPrice(selected_food.price);
    setIsSpecial(selected_food.is_special);
    setSelectedGoupID(selected_food.group?.id);
  }, [selected_food]);

  async function updateFoodItem() {
    const id = selected_food?.id || 0;

    // ugly code !!!!!
    if (
      selected_food.price == price &&
      selected_food.is_special == is_special &&
      selected_food?.group?.id == food_group_id &&
      selected_food.name == name
    ) {
      closeModal();
      return;
    }
    setIsLoading(true);
    const item = {
      id,
      price,
      name,
      is_special,
      food_group_id,
    };

    const response = await Food.update({ id, item });
    serverResponse(response);
    if (response.success) {
      refresh();
      closeModal();
    }
    setIsLoading(false);
  }

  // @TODO think of a methid that dosen't iterate throughtout the hole array
  //but intead stops when it finds the matched element
  // const $foodGroups = foodGroups.filter((row) => {
  //   return row.id != selected_food?.group?.id;
  // });

  return (
    <FormModal
      labels={{ title: `Update ${selected_food.name}` }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={updateFoodItem}
      isLoading={isLoading}
    >
      <div className="py-5 px-4 flex-col space-y-5">
        <div className="flex-column space-y-4">
          <div className="flex  items-center space-x-12">
            <p>Selected Group</p>
            <p className="text-sm bg-[#0dd19d] text-[#121063] py-1 px-5 rounded-sm">
              {selected_food?.group?.name || "-"}
            </p>
          </div>
          <SelectOption
            options={foodGroups}
            onSelectOption={(id) => setSelectedGoupID(id)}
            label="Select a group"
            required={false}
          />
        </div>
        <div className="flex-column space-y-4">
          <label htmlFor="name">Name</label>
          <TextField
            required
            name="name"
            fullWidth
            hiddenLabel
            defaultValue={selected_food?.name}
            size="small"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {selected_food?.variations?.length == 0 && (
          <div className="flex-column space-y-4">
            <label className="font-semibold">
              Price
              <span className="text-[#158df7] font-normal">
                (Enter price in MAD)
              </span>
            </label>
            <TextField
              hiddenLabel
              InputProps={{ inputProps: { min: 0 } }}
              size="small"
              type="number"
              variant="filled"
              placeholder="e.g Type price of this item"
              defaultValue={selected_food?.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        )}
        <div className="flex items-center">
          <Checkbox
            color="pink"
            defaultChecked={selected_food?.is_special == 0 ? false : true}
            onChange={(e) => {
              setIsSpecial(() => (e.target.checked ? 1 : 0));
            }}
          />
          <label>is special</label>
        </div>
      </div>
    </FormModal>
  );
}
