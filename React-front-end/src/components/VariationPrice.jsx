import { TextField } from "@mui/material";
import { useState } from "react";

const VariationPrice = ({ variations, onSelectOption }) => {
    const [variationPrice, setVariationPrice] = useState([]);

    function handleOnSelectedOption() {
        onSelectOption();
    }

    return variations.map((variation, i) => (
        <div key={i}>
            <label> Total price of {variation.name} variation</label>
            <TextField
                sx={{ width: "100%" }}
                label="Price"
                type="number"
                min={1}
                name="price"
                required
                onChange={() => {
                    handleOnSelectedOption(variation, i);
                }}
            />
        </div>
    ));
};

export default VariationPrice;
