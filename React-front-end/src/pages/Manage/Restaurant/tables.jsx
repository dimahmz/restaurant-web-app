import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Table } from "../../../APIs/Restaurant";
import SearchBar from "../../../components/SeachBar";

const Branches = () => {
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fechTables() {
    setIsLoading(true);
    const response = await Table.get();
    if (response.success) {
      setTables(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fechTables();
  }, []);

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "capacity", headerName: "Capacity", flex: 1 },
    {
      field: "branch_id",
      headerName: "Branch",
      valueGetter: (params) => {
        // Calculate age in months based on the 'age' field in years
        return params.row.branch.name;
      },
      flex: 1,
    },

    {
      field: "no_field",
      headerName: "Action",
      renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
      flex: 1,
    },
  ];

  return (
    <div className="bg-white h-full">
      <SearchBar title="Table List" />
      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={tables}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
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
