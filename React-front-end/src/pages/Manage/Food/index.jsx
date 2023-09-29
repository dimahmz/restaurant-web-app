import { BsThreeDots } from "react-icons/bs";
import TableHeader from "./tableHader";

import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import { Food } from "../../../APIs/Food";

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchFood() {
    setIsLoading(true);
    const response = await Food.get();
    if (response.success) setFoods(response.payload);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchFood();
  }, []);
  //   VITE_APP_IMAGES_URL
  const columns = [
    { field: "_index", headerName: "S/L", flex: 1 },
    {
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <div className="p-2 flex-center">
          <img
            className="block rounded-full w-12 h-12"
            src={`/images_host/${params.row.image}`}
            alt={params.row.name.slice(0, 9)}
          />
        </div>
      ),
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: () => (
        <BsThreeDots onClick="" style={{ cursor: "pointer" }} />
      ),
      flex: 1,
    },
  ];

  return (
    <div className="bg-white h-full">
      <TableHeader label="Items List" />
      <div className="w-full h-[400px] bg-white px-4 py-8 mt-3">
        <DataGrid
          rowHeight={80}
          rows={foods.map((row, i) => ({
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

export default FoodItems;
