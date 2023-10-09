import { useState } from "react";
import MultipleSelectChip from "../../../../../components/MultipleSelect";
import { TextField } from "@mui/material";
import _ from "lodash";

export default function AddVariation({ foodVariations, addVariationPrice }) {
  const [variations, setVariations] = useState([]);

  function handleSelectOption(selectedOptions) {
    setVariations(selectedOptions);
    addVariationPrice(selectedOptions);
  }

  function addPriceToVariation($variation, price) {
    const variationsWithPrices = _.map(variations, (variation) => {
      if (variation.id == $variation.id) {
        variation.price = price;
        variation.variation_id = variation.id;
      }
      return variation;
    });
    addVariationPrice(variationsWithPrices);
  }

  return (
    <div className="flex-column space-y-3 mb-3">
      <div className="w-full">
        <MultipleSelectChip
          options={foodVariations}
          onSelectOption={handleSelectOption}
        />
      </div>
      {variations.length != 0 && (
        <section className="bg-[#ebeef6] px-3 py-4">
          <div className="flex-column space-y-3 py-1">
            <h1 className="text-center py-2 bg-[#F64E60] text-white">
              Please enter price for each variation
            </h1>

            {variations.map((variation, i) => (
              <div key={i}>
                <label>
                  Total price of
                  <span className="text-[#F64E60]">
                    &nbsp;{variation.name}&nbsp;
                  </span>
                  variation
                  <span className="text-red-600">*</span>
                </label>
                <TextField
                  hiddenLabel
                  sx={{ width: "100%" }}
                  type="number"
                  min={1}
                  name="price"
                  required
                  onChange={(e) => {
                    addPriceToVariation(variation, e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
