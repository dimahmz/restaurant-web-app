import { FormControl, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

export default function SelectOption({
  options,
  onSelectOption,
  label,
  value,
  OptionId = "",
  required = true,
}) {
  const [selectedOptionId, setSelectedOptionId] = useState(OptionId);

  function handleSelectOption(e) {
    setSelectedOptionId(e.target.value);
    onSelectOption(e.target.value);
  }
  useEffect(() => {
    setSelectedOptionId("");
  }, [value]);

  return (
    <FormControl required={required} sx={{ width: "100%" }}>
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
          <label className="text-sm">{label}</label>
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
