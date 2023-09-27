import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, items, theme) {
  return {
    fontWeight:
      items.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ options, onSelectOption }) {
  const theme = useTheme();
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItems(() =>
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    // get the IDs base on the names
    const propertiesIDs = value.map((option) => {
      return options.find((o) => o.name === option);
    });

    onSelectOption(propertiesIDs);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        multiple
        value={items}
        onChange={handleChange}
        displayEmpty
        sx={{
          paddingY: "0px",
        }}
        input={<OutlinedInput id="select-multiple-chip" />}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            style={getStyles(option.name, items, theme)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}