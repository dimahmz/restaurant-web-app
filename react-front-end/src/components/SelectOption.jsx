import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SimpleSnackbar({ options, onSelectOption }) {
    const [selectedOption, setSelectedOption] = useState("");

    function handleSelectOption(e) {
        setSelectedOption(e.target.value);
        onSelectOption(e.target.value);
    }
    return (
        <FormControl sx={{ width: "100%" }}>
            <Select
                value={selectedOption}
                onChange={handleSelectOption}
                displayEmpty
                inputProps={{
                    "aria-label": "Without label",
                }}
                style={{
                    padding: 0,
                    margin: 0,
                    height: "35px",
                }}
                name="selectedFoodGroup"
            >
                <MenuItem value={""}>
                    <label>Select a Branch</label>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem
                        key={option.id}
                        value={option.id}
                        name={option.name}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
