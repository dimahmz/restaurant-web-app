/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  update_branch,
  update_table,
  reset_selections,
} from "../../stores/pointOfSale";
import SelectOption from "../../components/SelectOption";
import { useState } from "react";

const Branch = ({ branches, tables }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function cancleSelections() {
    setValue(Math.random());
    dispatch(reset_selections());
  }
  return (
    <div className="relative w-full h-full py-3 px-2 bg-white">
      <div className="flex flex-col space-y-5 h-[80%] w-full overflow-y-auto ">
        <div>
          <SelectOption
            value={value}
            label="Branch"
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
      </div>
      <div className="absolute bottom-[15px] w-full flex-center">
        <button
          onClick={cancleSelections}
          className="uppercase py-2 px-2 text-white bg-[#f64e60]"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Branch;
