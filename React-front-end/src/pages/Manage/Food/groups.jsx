import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Group } from "../../../APIs/Food";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const GroupItems = () => {
  const [Groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredGroups, setFiltredGroups] = useState([]);

  async function fetchGroup() {
    setIsLoading(true);

    const response = await Group.get();
    if (response.success) {
      setGroups(response.payload);
      setFiltredGroups(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchGroup();
  }, []);
  //   VITE_APP_IMAGES_URL
  const columns = [
    { field: "_index", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: () => (
        <BsThreeDots onClick="" style={{ cursor: "pointer" }} />
      ),
      flex: 1,
    },
  ];

  function filterGroup(e) {
    const name = e.target.value;
    const filtredGroups = Filter.byName(Groups, name);
    setFiltredGroups(filtredGroups);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader title="Goup Item List" handleSearchChange={filterGroup} />
      <div className="w-full h-[400px] px-4 py-8 mt-3">
        <DataGrid
          rows={filtredGroups.map((row, i) => ({
            _index: i + 1,
            ...row,
          }))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default GroupItems;
