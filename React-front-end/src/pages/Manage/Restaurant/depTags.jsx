import { useEffect, useState } from "react";
import { DeptTag } from "../../../APIs/Restaurant";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const Branches = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredDepartment, setfiltredDepartment] = useState([]);

  async function fechDepartments() {
    setIsLoading(true);
    const response = await DeptTag.get();
    if (response.success) {
      setDepartments(response.payload);
      setfiltredDepartment(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fechDepartments();
  }, []);

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "commission", headerName: "Commission (%)", flex: 1 },

    {
      field: "no_field",
      headerName: "Action",
      renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
      flex: 1,
    },
  ];

  function filterDepartment(e) {
    const name = e.target.value;
    const $filtredDepartment = Filter.byName(departments, name);
    setfiltredDepartment($filtredDepartment);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Department Tag List"
        handleSearchChange={filterDepartment}
      />
      <div className="w-full h-[370px] px-4 py-2">
        <DataGrid
          rows={filtredDepartment}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 4 },
            },
          }}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Branches;
