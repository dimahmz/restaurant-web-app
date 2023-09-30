import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Table } from "../../../APIs/Restaurant";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const ManageTables = () => {
  const [Tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredTables, setFiltredTables] = useState([]);

  async function fechTables() {
    setIsLoading(true);
    const response = await Table.get();
    if (response.success) {
      setTables(response.payload);
      setFiltredTables(response.payload);
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

  function filterTables(e) {
    const name = e.target.value;
    const $filtredTable = Filter.byName(Tables, name);
    setFiltredTables($filtredTable);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader title="Table List" handleSearchChange={filterTables} />
      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={filtredTables}
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

export default ManageTables;
