import { FormControl, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

export default function SimpleSnackbar({
  options,
  onSelectOption,
  label,
  value,
}) {
  const [selectedOptionId, setSelectedOptionId] = useState("");

  function handleSelectOption(e) {
    setSelectedOptionId(e.target.value);
    onSelectOption(e.target.value);
  }
  useEffect(() => {
    setSelectedOptionId("");
  }, [value]);

  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        value={selectedOptionId}
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
        <MenuItem value={selectedOptionId}>
          <label>{label}</label>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id} name={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}