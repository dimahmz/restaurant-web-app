import { Button } from "@mui/material";
import SearchInput from "../../../components/SearchInput";

const TableHeader = ({
  title,
  onAddNew,
  handleSearchChange,
  placeholder = "Search..",
}) => {
  return (
    <div className="flex-center-between pt-4 px-8">
      <p className="text-[#121053] text-2xl font-medium">{title}</p>
      <div className="flex items-center space-x-5">
        <SearchInput placeholder={placeholder} onChange={handleSearchChange} />
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
