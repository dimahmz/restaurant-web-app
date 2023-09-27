import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Checkbox } from "@material-tailwind/react";
import SelectOption from "../../../components/SelectOption";
import MultipleSelectChip from "../../../components/MultipleSelect";
import { Food, Group, Variation } from "../../../APIs/Food";
import VariationPrice from "../../../components/VariationPrice";
import SnackBar from "../../../components/snackBar";
import getResponseMessage from "../../../utils/getResponse";

const AddNewItemPage = () => {
  const [hasVariations, setHasVariations] = useState(false);

  const [foodGroups, setFoodGroups] = useState([]);

  const [foodVariations, setFoodVariations] = useState([]);

  const [selectedVariations, setSelectedVariations] = useState([]);

  const [food_group_id, setFoodGroupID] = useState(null);

  const [price, setPrice] = useState(null);

  const [name, setName] = useState("");

  const [variations_IDs, SetvariationsIDs] = useState([]);

  const [message, setMessage] = useState("Food item has been added");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    async function fetchFoodGroups() {
      const response = await Group.get();
      if (response.success) {
        setFoodGroups(response.payload);
      }
    }
    async function fetchVariations() {
      const response = await Variation.get();
      if (response.success) {
        setFoodVariations(response.payload);
      }
    }

    fetchFoodGroups();
    fetchVariations();
  }, []);

  function onSelectVariation(selectedVariations) {
    setSelectedVariations(selectedVariations);
  }

  function onAddVariationPrice($variations_prices) {
    SetvariationsIDs($variations_prices);
    console.log(variations_IDs);
  }

  async function AddNewFoodItem(e) {
    e.preventDefault();
    const image = e.target["image"].files[0];
    const is_special = e.target["is_special"].value ? 1 : 0;
    const newFood = {
      name,
      image,
      price,
      food_group_id,
      is_special,
      variations_IDs,
    };
    const response = await Food.create(newFood);
    if (!response.success) {
      const msg = getResponseMessage(response);

      setMessage(msg);
      setSeverity("error");
    } else {
      setMessage("Food item has been added");
      setSeverity("success");
    }

    setOpen(true);
  }

  return (
    <>
      <SnackBar
        message={message}
        open={open}
        severity={severity}
        handleClose={() => {
          setOpen(false);
        }}
      />

      <div className="w-full p-6 text-[#121053] text-sm bg-white">
        <p className="mb-3 text-[#121053] text-lg font-bold">Add New Item</p>
        <form
          encType="multipart/form-data"
          onSubmit={AddNewFoodItem}
          className="rounded-lg border-[1px] border-solid p-4"
        >
          <div className="flex-column space-y-2 mb-3">
            <label className=" font-semibold ">
              Food Group
              <span className="text-red-600">*</span>
            </label>
            <SelectOption
              options={foodGroups}
              onSelectOption={(id) => {
                setFoodGroupID(id);
              }}
            />
          </div>
          <div className="flex-column space-y-2 mb-3">
            <label className=" font-semibold">
              Name
              <span className="text-red-600">*</span>
            </label>
            <TextField
              size="small"
              label="e.g Pizza"
              variant="filled"
              hiddenLabel
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox
              className="h-4 w-4"
              color="pink"
              defaultChecked={hasVariations}
              onChange={() => setHasVariations(!hasVariations)}
            />
            <label className="inline-block cursor-pointer">
              Has variations?
            </label>
          </div>
          {hasVariations && (
            <div className="flex-column space-y-3 mb-3">
              <label className="inline-block">Add Variations</label>
              <div className="w-full">
                <MultipleSelectChip
                  options={foodVariations}
                  onSelectOption={onSelectVariation}
                />
              </div>
              {selectedVariations.length > 0 && (
                <section className="bg-[#ebeef6] px-3 py-4">
                  <h1 className="text-center py-2 bg-[#F64E60] text-white">
                    Please enter price for each variation
                  </h1>
                  <div className="pt-4">
                    <VariationPrice
                      variations={selectedVariations}
                      onSelectOption={onAddVariationPrice}
                    />
                  </div>
                </section>
              )}
            </div>
          )}
          <div className="flex-column space-y-3 mb-3">
            <label className="font-semibold">
              Price
              <span className="text-red-600">
                *
                <span className="text-[#158df7] font-normal">
                  (Enter price in USD)
                </span>
              </span>
            </label>
            <TextField
              size="small"
              type="number"
              variant="filled"
              label="e.g Type price of this item"
              hiddenLabel
              min={1}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <Checkbox
              className="h-4 w-4"
              color="pink"
              defaultChecked
              name="is_special"
            />
            <label className="cursor-pointer"> Is Special?</label>
          </div>
          <div className="flex-column space-y-6">
            <label className="font-semibold ">
              Image
              <span className="text-[#158df7] font-normal">(300x300)</span>
            </label>
            <div>
              <input type="file" name="image" accept="image/*" required />
            </div>
            <div>
              <button className="rounded-sm px-12 py-[0.375rem] duration-300 text-white bg-[#f64e60] hover:bg-[#f96674]">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewItemPage;
