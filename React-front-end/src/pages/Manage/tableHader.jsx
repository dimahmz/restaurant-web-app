import { BiSearch } from "react-icons/bi";
import { Button } from "@mui/material";

const TableHeader = ({
  title,
  onAddNew,
  handleSearchChange,
  placeholder = "Search..",
  rows,
  filteredRows,
}) => {
  return (
    <div className="flex-center-between pt-4 px-8">
      <p className="text-[#121053] text-2xl font-medium">{title}</p>
      <div className="flex items-center space-x-5">
        <div className="flex">
          <input
            type="text"
            name="search"
            className="bg-[#f0f7fb] h-9"
            onChange={handleSearchChange}
            placeholder={placeholder}
          />
          <div className="bg-[#f64e60]  p-2 h-9 w-9 flex-center">
            <BiSearch size={19} className="text-white" />
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            paddingX: "50px",
            backgroundColor: "#F5364A",
            "&:hover": {
              backgroundColor: "#F5365A",
            },
          }}
          onClick={onAddNew}
        >
          ADD NEW
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;
