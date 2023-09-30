import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Branch } from "../../../APIs/Restaurant";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredBranches, setFiltredBranches] = useState([]);

  async function fechBranches() {
    setIsLoading(true);
    const response = await Branch.get();
    if (response.success) {
      setBranches(response.payload);
      setFiltredBranches(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fechBranches();
  }, []);

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "delivery_charge", headerName: "Delivery Charge", flex: 1 },
    { field: "address", headerName: "address", flex: 1 },
    { field: "phone", headerName: "Phn No", flex: 1 },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
      flex: 1,
    },
  ];

  function filterBranches(e) {
    const name = e.target.value;
    const $filtredBranches = Filter.byName(branches, name);
    setFiltredBranches($filtredBranches);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader title="Goup Item List" handleSearchChange={filterBranches} />
      <div className="w-full h-[370px] bg-white px-4 py-2">
        <DataGrid
          rows={filtredBranches}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 10]}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Branches;
