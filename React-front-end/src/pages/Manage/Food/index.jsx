import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import TableHeader from "../tableHader";

import { Food } from "../../../APIs/Food";

const FoodItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [filtredFoods, setFiltredFoods] = useState([]);

  async function fetchFood() {
    setIsLoading(true);
    const response = await Food.get();
    if (response.success) {
      setFoods(response.payload);
      setFiltredFoods(response.payload);
    }
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
      renderCell: () => <BsThreeDots style={{ cursor: "pointer" }} />,
      flex: 1,
    },
  ];

  const naviagate = useNavigate();

  function handleAddNewFood() {
    naviagate("add-food");
  }

  function filterFoodItems(e) {
    const name = e.target.value;
    let $filtredFoods = [...foods];

    if (name) {
      const filtredByName = foods.filter((food) => {
        const namePattern = new RegExp(name, "i");
        return namePattern.test(food.name);
      });

      $filtredFoods = [...filtredByName];
    }

    setFiltredFoods($filtredFoods);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Items List"
        onAddNew={handleAddNewFood}
        handleSearchChange={filterFoodItems}
        placeholder="search by name"
      />
      <div className="w-full h-[400px] bg-white px-4 py-8 mt-3">
        <DataGrid
          rowHeight={80}
          rows={filtredFoods.map((row, i) => ({
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
