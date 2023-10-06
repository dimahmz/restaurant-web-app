import { useEffect, useState } from "react";
import TableHeader from "../../tableHeader";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { MenuItem } from "@mui/material";
import SnackBar from "../../../../components/snackBar";
import DotsMenu from "../../../../components/dotsMenu";
import { Variation } from "../../../../APIs/Food";
import Filter from "../../../../utils/filters";
import {
  set_selected_item,
  toggle_add_item_modal,
  toggle_delete_item_modal,
  toggle_edit_modal,
} from "../../../../stores/manageFood";
import { useDispatch } from "react-redux";
import AddVariationModal from "./addVariation";
import DeleteVariationModal from "./deleteVariation";
import EditVariationModal from "./editVariation";
import getResponseMessage from "../../../../utils/getResponse";

export default function VariationItems() {
  const dispatch = useDispatch();

  const [Variations, setVariations] = useState([]);
  const [filtredVariations, setFiltredVariations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  async function fetchVariations() {
    setIsLoading(true);
    const response = await Variation.get();
    if (response.success) {
      setVariations(response.payload);
      setFiltredVariations(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchVariations();
  }, []);

  function displayReponse(response) {
    const message = getResponseMessage(response);
    setResponse(() => ({
      open: true,
      message,
      severity: response.success ? "success" : "error",
    }));
  }

  const columns = [
    { field: "_index", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu
            onClick={() => {
              dispatch(
                set_selected_item({
                  name: "selectedVariation",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditVariationModal",
                    value: true,
                  })
                );
              }}
            >
              <div className="flex items-center space-x-2">
                <MdModeEdit />
                <p>edit</p>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_delete_item_modal({
                    name: "openDeleteVariationModal",
                    value: true,
                  })
                );
              }}
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

  // filter
  function filterGroup(e) {
    const name = e.target.value;
    const filtredVariations = Filter.byName(Variations, name);
    setFiltredVariations(filtredVariations);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Variations Item List"
        handleSearchChange={filterGroup}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddVariationModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddVariationModal
        refresh={fetchVariations}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <EditVariationModal
        refresh={fetchVariations}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <DeleteVariationModal
        refresh={fetchVariations}
        serverResponse={displayReponse}
      />

      <div className="w-full h-[400px] px-4 py-8 mt-3">
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
      {/* notification message */}
      <SnackBar
        message={response.message}
        open={response.open}
        severity={response.severity}
        handleClose={() => {
          setResponse((prev) => ({ ...prev, open: false }));
        }}
      />
    </div>
  );
}
