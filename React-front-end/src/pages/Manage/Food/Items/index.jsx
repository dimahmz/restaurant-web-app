import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DotsMenu from "../../../../components/dotsMenu";
import DataGrid from "../../../../components/DataGrid";
import TableHeader from "../../tableHeader";
import { MenuItem } from "@mui/material";
import { MdDelete, MdModeEdit, MdAdd, MdImage } from "react-icons/md";
import { Food, Group } from "../../../../APIs/Food";
import { useDispatch } from "react-redux";
import ChangeImageModal from "./changeImgModal";
import Filter from "../../../../utils/filters";
import DeleteFoodItemModal from "./deleteFoodModal";
import EditFoodModal from "./editFoodModal";
import AddVariationModal from "./addFoodVariationModal";
import ChangeVariationModal from "./changeVariationModal";
import {
  toggle_edit_modal,
  toggle_delete_item_modal,
  set_selected_item,
  toggle_add_item_modal,
} from "../../../../stores/manageFood";
import SimpleSnackbar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";

const FoodItems = () => {
  const imgUrl = import.meta.env.VITE_APP_IMAGES_HOST;

  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [foodGroups, setFoodGroups] = useState([]);
  const [filtredFoods, setFiltredFoods] = useState([]);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  function displayReponse(response) {
    const message = getResponseMessage(response);
    setResponse(() => ({
      open: true,
      message,
      severity: response.success ? "success" : "error",
    }));
  }
  const dispatch = useDispatch();

  // fechers
  async function fetchFood() {
    setIsFetchLoading(true);
    const response = await Food.get();
    if (response.success) {
      setFoods(response.payload);
      setFiltredFoods(response.payload);
    } else {
      setResponse(response);
    }
    setIsFetchLoading(false);
  }

  async function fetchFoodGroups() {
    const response = await Group.get();
    if (response.success) {
      setFoodGroups(response.payload);
    }
  }

  useEffect(() => {
    fetchFood();
    fetchFoodGroups();
  }, []);

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    {
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <div className="p-2 flex-center">
          <img
            className="block rounded-full w-12 h-12 object-cover"
            src={`${imgUrl}/${params.row.image}`}
            alt={params.row.name.slice(0, 9)}
          />
        </div>
      ),
    },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "group",
      headerName: "Group",
      valueGetter: (params) => params.row.group.name || "-",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      renderCell: (params) => {
        if (params.row.variations.length == 0) {
          return params.row.price;
        }
        return (
          <button
            className="bg-[#F5364A] text-white px-1 py-0.5 rounded"
            onClick={() => {
              dispatch(
                toggle_edit_modal({
                  name: "openChangeFoodVariationModal",
                  value: true,
                })
              );
              dispatch(
                set_selected_item({
                  name: "selectedFood",
                  value: params.row,
                })
              );
            }}
          >
            check variations
          </button>
        );
      },
      flex: 1,
    },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu
            onClick={() => {
              dispatch(
                set_selected_item({
                  name: "selectedFood",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_add_item_modal({
                    name: "openAddFoodVariationModal",
                    value: true,
                  })
                );
              }}
            >
              <div className="flex items-center space-x-2">
                <MdAdd />
                <p>Add variation</p>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_add_item_modal({
                    name: "openEditFoodItemModal",
                    value: true,
                  })
                );
              }}
            >
              <div className="flex items-center space-x-2">
                <MdModeEdit />
                <p>Edit / View</p>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openChangeFoodImgModal",
                    value: true,
                  })
                );
              }}
            >
              <div className="flex items-center space-x-2">
                <MdImage />
                <p>Image</p>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() =>
                dispatch(
                  toggle_delete_item_modal({
                    name: "openDeleteItemModal",
                    value: true,
                  })
                )
              }
            >
              <div className="flex items-center space-x-2">
                <MdDelete />
                <p>Delete</p>
              </div>
            </MenuItem>
          </DotsMenu>
        );
      },
      flex: 1,
    },
  ];

  const naviagate = useNavigate();
  function handleAddNewFood() {
    naviagate("add-food");
  }

  function filterFoodItems(e) {
    const name = e.target.value;
    const $filtredFoods = Filter.byName(foods, name);
    setFiltredFoods($filtredFoods);
  }

  return (
    <div className="bg-white h-full w-full">
      {/* Delete a food modal */}
      <DeleteFoodItemModal
        refresh={fetchFood}
        serverResponse={displayReponse}
      />
      {/* edit an image Modal */}
      <ChangeImageModal refresh={fetchFood} serverResponse={displayReponse} />
      {/* edit a food item modal */}
      <EditFoodModal
        foodGroups={foodGroups}
        refresh={fetchFood}
        serverResponse={displayReponse}
      />
      {/* add variations  modal */}
      <AddVariationModal refresh={fetchFood} serverResponse={displayReponse} />
      {/* Change variations  modal */}
      <ChangeVariationModal
        refresh={fetchFood}
        serverResponse={displayReponse}
      />

      <TableHeader
        title="Items List"
        onAddNew={handleAddNewFood}
        handleSearchChange={filterFoodItems}
        placeholder="search by name"
      />
      {/* table of foods */}
      <DataGrid
        isLoading={isFetchLoading}
        columns={columns}
        filteredRows={filtredFoods}
      />
      <SimpleSnackbar
        message={response.message}
        open={response.open}
        severity={response.severity}
        handleClose={() => {
          setResponse((prev) => ({ ...prev, open: false }));
        }}
      />
    </div>
  );
};

export default FoodItems;
