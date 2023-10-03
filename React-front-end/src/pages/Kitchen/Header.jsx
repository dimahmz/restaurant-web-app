import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { Branch } from "../../APIs/Restaurant";
import SearchInput from "../../components/SearchInput";

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
        <SearchInput
          placeholder="Search By Token"
          onChange={(e) => setSerachId(e.target.value)}
        />
      </div>
    </header>
  );
};

export default KitchenHeader;
