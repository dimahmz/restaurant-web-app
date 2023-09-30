import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Branch } from "../../APIs/Restaurant";

const KitchenHeader = ({ onRefrechOrder, handleFilter }) => {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState("");

  const [serachId, setSerachId] = useState(undefined);

  async function fetchBranches() {
    const response = await Branch.get();
    if (response.success) setBranches(response.payload);
  }

  useEffect(() => {
    fetchBranches();
  }, []);

  useEffect(() => {
    handleFilter({
      branchId: selectedBranchId,
      id: serachId,
    });
    console.log(selectedBranchId);
  }, [selectedBranchId, serachId]);

  return (
    <header className="flex items-center bg-white py-5 px-4 shadow-lg">
      <h1 className="w-full text-lg font-semibold">Kitchen Dashboard</h1>
      <div className="flex justify-end space-x-4 w-full">
        <div className="">
          <Button
            variant="contained"
            sx={{
              paddingX: "50px",
              backgroundColor: "#F5364A",
              "&:hover": {
                backgroundColor: "#F5365A",
              },
            }}
            onClick={onRefrechOrder}
          >
            refresh
          </Button>
        </div>
        <FormControl sx={{ width: "200px" }}>
          <Select
            value={selectedBranchId}
            onChange={(e) => {
              setSelectedBranchId(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{
              padding: 0,
              margin: 0,
              height: "35px",
            }}
          >
            <MenuItem value="">
              <em>Any Branch</em>
            </MenuItem>
            {branches.map((branch) => (
              <MenuItem key={branch.id} value={branch.id}>
                {branch.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="flex-center">
          <input
            className="bg-[#f0f7fb] px-2 text-[#49505] text-xs h-[36px] focus:outline-none"
            type="text"
            placeholder="Search By Token"
            onChange={(e) => setSerachId(e.target.value)}
          />
          <div className="bg-[#f64e60] p-2 h-9 w-9 flex-center">
            <BiSearch size={15} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default KitchenHeader;
