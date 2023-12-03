import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Checkbox } from "@material-tailwind/react";
import SelectOption from "../../../../components/SelectOption";
import { Food, Group, Variation } from "../../../../APIs/Food";
import SnackBar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";
import { LoadingButton } from "@mui/lab";
import AddVariation from "./components/addVariations";
import _ from "lodash";

const AddNewItemPage = () => {
  const [foodGroups, setFoodGroups] = useState([]);

  const [foodVariations, setFoodVariations] = useState([]);

  const [selectedVariationIDs, setSelectedVariationIDs] = useState([]);

  const [food_group_id, setFoodGroupID] = useState("");

  const [price, setPrice] = useState("");

  const [hasVariations, setHasVariations] = useState(false);

  const [is_special, setIsSpecial] = useState(1);

  const [image, setImage] = useState(null);

  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  function resetForm() {
    setHasVariations(false);
    setImage(null);
    setPrice("");
    setName("");
  }

  // add the price to the selected variation
  function getVariationsPrices(variatiosPrices) {
    const $variationsPrices = _.map(variatiosPrices, (obj) =>
      _.pick(obj, ["variation_id", "price"])
    );
    setSelectedVariationIDs($variationsPrices);
  }

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

  async function AddNewFoodItem(e) {
    e.preventDefault();
    setIsLoading(true);
    const newFood = {
      name,
      image,
      price: hasVariations ? 0 : price,
      food_group_id,
      is_special,
      variations_IDs: selectedVariationIDs,
    };
    console.log(newFood);
    const response = await Food.create(newFood);
    const message = getResponseMessage(response);

    if (response.errorLevel != 3) {
      setResponse(() => ({
        open: true,
        message,
        severity: response.success ? "success" : "error",
      }));
    }

    if (response.success) resetForm();

    setIsLoading(false);
  }

  return (
    <div className="w-full h-full p-6 text-[#121053] text-sm bg-white">
      <SnackBar
        message={response.message}
        open={response.open}
        severity={response.severity}
        handleClose={() => {
          setResponse((prev) => ({ ...prev, open: false }));
        }}
      />

      <p className="mb-3 text-[#121053] text-lg font-bold">Add New Item</p>
      <form
        encType="multipart/form-data"
        onSubmit={AddNewFoodItem}
        className="w-full rounded-lg border-[1px] border-solid p-4"
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
            label="Select a group"
            required
          />
        </div>
        <div className="flex-column space-y-2 mb-3">
          <label className=" font-semibold">
            Name
            <span className="text-red-600">*</span>
          </label>
          <TextField
            hiddenLabel
            value={name}
            placeholder="e.g Spicy Pizza"
            size="small"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center space-x-2 mb-3">
          <Checkbox
            className="h-4 w-4"
            color="pink"
            checked={hasVariations}
            onChange={() => setHasVariations(!hasVariations)}
          />
          <label className="inline-block cursor-pointer">Has variations?</label>
        </div>
        {hasVariations && (
          <AddVariation
            foodVariations={foodVariations}
            addVariationPrice={getVariationsPrices}
          />
        )}
        {!hasVariations && (
          <div className="flex-column space-y-3 mb-3">
            <label className="font-semibold">
              Price
              <span className="text-red-600">
                *
                <span className="text-[#158df7] font-normal">
                  (Enter price in MAD)
                </span>
              </span>
            </label>
            <TextField
              hiddenLabel
              value={price}
              type="number"
              size="small"
              InputProps={{ inputProps: { min: 0 } }}
              variant="filled"
              placeholder="e.g Type price of this item"
              min={1}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        )}
        <div className="flex items-center space-x-3 mb-3">
          <Checkbox
            className="h-4 w-4"
            color="pink"
            name="is_special"
            defaultChecked={() => (is_special == 1 ? true : false)}
            onChange={() => setIsSpecial(() => (is_special ? 1 : 0))}
          />
          <label className="cursor-pointer"> Is Special?</label>
        </div>
        <div className="flex-column space-y-6">
          <label className="font-semibold ">
            Image
            <span className="text-[#158df7] font-normal">(300x300)</span>
          </label>
          <div>
            <input
              type="file"
              name="image"
              accept="image/*"
              defaultValue={image}
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button className="inline-block text-lg uppercase tracking-widest">
            <LoadingButton
              sx={{
                paddingX: "70px",
                paddingY: "7px",
                backgroundColor: "#F5364A",
                fontSize: "15px",
                letterSpacing: "5px",
                "&:hover": {
                  backgroundColor: "#F5365A",
                },
              }}
              loading={isLoading}
              size="small"
              loadingPosition="center"
              variant="contained"
            >
              <span>save</span>
            </LoadingButton>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItemPage;
