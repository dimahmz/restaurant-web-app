/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  update_branch,
  update_table,
  update_payment_type,
  reset_selections,
} from "../../stores/pointOfSale";
import SelectOption from "../../components/SelectOption";
import { useState } from "react";
import { Button } from "@mui/material";

const SelectSideBar = ({ branches, tables, pyamnetTypes }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function cancleSelections() {
    setValue(Math.random());
    dispatch(reset_selections());
  }

  return (
    <div className="flex-column justify-between space-y-7 w-full h-full overflow-y-auto py-4 px-2 ">
      <div className="flex-column space-y-3 flex-1">
        <div>
          <SelectOption
            value={value}
            label="Branch"
            className="text-xs"
            options={branches}
            onSelectOption={(id) => {
              dispatch(update_branch(id));
            }}
          />
        </div>
        <div>
          <SelectOption
            label="Table"
            value={value}
            options={tables}
            onSelectOption={(id) => {
              dispatch(update_table(id));
            }}
          />
        </div>
        <SelectOption
          label="Payment"
          value={value}
          options={pyamnetTypes}
          onSelectOption={(id) => {
            dispatch(update_payment_type(id));
          }}
        />
      </div>
      <div className="w-full flex-center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f64e60",
            "&:hover": {
              backgroundColor: "#f64e60",
            },
          }}
          onClick={cancleSelections}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SelectSideBar;
