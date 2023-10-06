import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { DeptTag } from "../../../../APIs/Restaurant";
import DeptTagHeader from "../../tableHader";
import Filter from "../../../../utils/filters";
import DotsMenu from "../../../../components/dotsMenu";
import { MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  set_selected_item,
  toggle_add_item_modal,
  toggle_delete_item_modal,
  toggle_edit_modal,
} from "../../../../stores/manageFood";
import AddDeptTagModal from "./addDepTag";
import EditDeptTagModal from "./editDepTag";
import DeleteDeptTagModal from "./deleteDepTag";
import SnackBar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";

const Branches = () => {
  const dispatch = useDispatch();

  const [DepTags, setDepTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredDepTags, setFiltredDepTags] = useState([]);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  async function fetchDeptTags() {
    setIsLoading(true);
    const response = await DeptTag.get();
    if (response.success) {
      setDepTags(response.payload);
      setFiltredDepTags(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchDeptTags();
  }, []);

  function displayReponse($response) {
    const message = getResponseMessage($response);
    setResponse(() => ({
      open: true,
      message,
      severity: $response.success ? "success" : "error",
    }));
  }

  function filterDeptTags(e) {
    const name = e.target.value;
    const $filtredDepTags = Filter.byName(DepTags, name);
    setFiltredDepTags($filtredDepTags);
  }

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "commission", headerName: "Commission", flex: 1 },

    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu
            onClick={() => {
              dispatch(
                set_selected_item({
                  name: "selectedDeptTag",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditDeptTagModal",
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
                    name: "openDeleteDeptTagModal",
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

  return (
    <div className="bg-white h-full">
      <DeptTagHeader
        title="DepTag Type List"
        handleSearchChange={filterDeptTags}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddDeptTagModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddDeptTagModal
        refresh={fetchDeptTags}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <EditDeptTagModal
        refresh={fetchDeptTags}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <DeleteDeptTagModal
        refresh={fetchDeptTags}
        serverResponse={displayReponse}
      />

      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={filtredDepTags}
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
};

export default Branches;
