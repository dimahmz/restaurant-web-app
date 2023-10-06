import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const VariationPrice = ({ variations, onSelectOption }) => {
  const [variationPrice, setVariationPrice] = useState([]);

  function handleOnSelectedOption(variation, price) {
    setVariationPrice((prev) => {
      // add the a new price and variation_id or just update the price
      let is_varaition_exists = false;
      let variations_prices = variationPrice.map(($variation) => {
        if ($variation.variation_id != variation.id) return $variation;
        // varaiation is already exists
        is_varaition_exists = true;
        $variation.price = price;
        return $variation;
      });
      if (!is_varaition_exists)
        variations_prices = [...prev, { variation_id: variation.id, price }];

      // get the new updated array of IDs of the selected variations
      const variation_IDs = variations.map(($variation) => $variation.id);

      // remove the unselected variations
      const $variations_prices = variations_prices.filter(($variation) =>
        variation_IDs.includes($variation.variation_id)
      );
      return $variations_prices;
    });

    onSelectOption(variationPrice);
  }

  useEffect(() => {
    // get the new updated array of IDs of the selected variations
    const variation_IDs = variations.map(($variation) => $variation.id);

    // remove the unselected variations
    const $variations_prices = variationPrice.filter(($variation) =>
      variation_IDs.includes($variation.variation_id)
    );

    setVariationPrice(() => [...$variations_prices]);

    onSelectOption(variationPrice);
  }, [variations]);

  return (
    <div className="flex-column space-y-3 py-1">
      {variations.map((variation, i) => (
        <div key={i}>
          <label>
            Total price of
            <span className="text-[#F64E60]">&nbsp;{variation.name}&nbsp;</span>
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
              handleOnSelectedOption(variation, e.target.value);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default VariationPrice;
