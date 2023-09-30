import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Variation } from "../../../APIs/Food";
import TableHeader from "../tableHader";
import Filter from "../../../utils/filters";

const GroupItems = () => {
  const [Variations, setVariations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredVariations, setFiltredVariations] = useState([]);

  async function fetchGroup() {
    setIsLoading(true);
    const response = await Variation.get();
    if (response.success) {
      setVariations(response.payload);
      setFiltredVariations(response.payload);
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

  function filterVariations(e) {
    const name = e.target.value;
    const filtredGroups = Filter.byName(Variations, name);
    setFiltredVariations(filtredGroups);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Goup Item List"
        handleSearchChange={filterVariations}
      />
      <div className="w-full h-[400px] bg-white px-4 py-8 mt-3">
        <DataGrid
          rows={filtredVariations.map((row, i) => ({
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
