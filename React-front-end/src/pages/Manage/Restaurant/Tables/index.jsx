import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { Branch, Table } from "../../../../APIs/Restaurant";
import TableHeader from "../../tableHader";
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
import AddTableModal from "./addTable";
import EditTableModal from "./editTable";
import DeleteTableModal from "./deleteTable";
import SnackBar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";

const Branches = () => {
  const dispatch = useDispatch();

  const [Tables, setTables] = useState([]);
  const [branches, setBranches] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [filtredTables, setFiltredTables] = useState([]);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fechBranches();
    fetchTables();
  }, []);

  async function fetchTables() {
    setIsLoading(true);
    const response = await Table.get();
    if (response.success) {
      setTables(response.payload);
      setFiltredTables(response.payload);
    }
    setIsLoading(false);
  }

  async function fechBranches() {
    setIsLoading(true);
    const response = await Branch.get();
    if (response.success) {
      setBranches(response.payload);
    }
    setIsLoading(false);
  }

  function displayReponse($response) {
    const message = getResponseMessage($response);
    setResponse(() => ({
      open: true,
      message,
      severity: $response.success ? "success" : "error",
    }));
  }

  function filterTables(e) {
    const name = e.target.value;
    const $filtredTables = Filter.byName(Tables, name);
    setFiltredTables($filtredTables);
  }

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "capacity", headerName: "Capacity", flex: 1 },
    {
      field: "branch_id",
      headerName: "Branch",
      valueGetter: (params) => {
        return params.row.branch.name;
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
                  name: "selectedTable",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditTableModal",
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
                    name: "openDeleteTableModal",
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
      <TableHeader
        title="Table list"
        handleSearchChange={filterTables}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddTableModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddTableModal
        refresh={fetchTables}
        serverResponse={displayReponse}
        branches={branches}
      />
      {/* Add varition */}
      <EditTableModal
        refresh={fetchTables}
        serverResponse={displayReponse}
        branches={branches}
      />
      {/* Add varition */}
      <DeleteTableModal refresh={fetchTables} serverResponse={displayReponse} />

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
