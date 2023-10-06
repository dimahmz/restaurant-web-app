import { useEffect, useState } from "react";
import TableHeader from "../../tableHader";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { MenuItem } from "@mui/material";
import SnackBar from "../../../../components/snackBar";
import DotsMenu from "../../../../components/dotsMenu";
import { Group } from "../../../../APIs/Food";
import Filter from "../../../../utils/filters";
import {
  set_selected_item,
  toggle_add_item_modal,
  toggle_delete_item_modal,
  toggle_edit_modal,
} from "../../../../stores/manageFood";
import { useDispatch } from "react-redux";
import AddGroupModal from "./addGroup";
import DeleteGroupModal from "./deleteGroup";
import EditGroupModal from "./editGroup";
import getResponseMessage from "../../../../utils/getResponse";

export default function GroupItems() {
  const dispatch = useDispatch();

  const [Groups, setGroups] = useState([]);
  const [filtredGroups, setFiltredGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  async function fetchGroups() {
    setIsLoading(true);
    const response = await Group.get();
    if (response.success) {
      setGroups(response.payload);
      setFiltredGroups(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchGroups();
  }, []);

  function displayReponse($response) {
    const message = getResponseMessage($response);
    setResponse(() => ({
      open: true,
      message,
      severity: $response.success ? "success" : "error",
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
                  name: "selectedGroup",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditGroupModal",
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
                    name: "openDeleteGroupModal",
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
    const filtredGroups = Filter.byName(Groups, name);
    setFiltredGroups(filtredGroups);
  }

  return (
    <div className="bg-white h-full">
      <TableHeader
        title="Groups Item List"
        handleSearchChange={filterGroup}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddGroupModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddGroupModal refresh={fetchGroups} serverResponse={displayReponse} />
      {/* Add varition */}
      <EditGroupModal refresh={fetchGroups} serverResponse={displayReponse} />
      {/* Add varition */}
      <DeleteGroupModal refresh={fetchGroups} serverResponse={displayReponse} />

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
