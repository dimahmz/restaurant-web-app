import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { Branch } from "../../../../APIs/Restaurant";
import BranchHeader from "../../tableHader";
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
import AddBranchModal from "./addBranch";
import EditBranchModal from "./editBranch";
import DeleteBranchModal from "./deleteBranch";
import SnackBar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";

const Branches = () => {
  const dispatch = useDispatch();

  const [Branches, setBranches] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [filtredBranches, setFiltredBranches] = useState([]);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchBranches();
  }, []);

  async function fetchBranches() {
    setIsLoading(true);
    const response = await Branch.get();
    if (response.success) {
      setBranches(response.payload);
      setFiltredBranches(response.payload);
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

  function filterBranchs(e) {
    const name = e.target.value;
    const $filtredBranchs = Filter.byName(Branches, name);
    setFiltredBranches($filtredBranchs);
  }

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "delivery_charge", headerName: "Delivery Charge", flex: 1 },
    { field: "address", headerName: "address", flex: 1 },
    { field: "phone", headerName: "Phn No", flex: 1 },
    {
      field: "edit_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu
            onClick={() => {
              dispatch(
                set_selected_item({
                  name: "selectedBranch",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditBranchModal",
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
                    name: "openDeleteBranchModal",
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
      <BranchHeader
        title="Branch list"
        handleSearchChange={filterBranchs}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddBranchModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddBranchModal refresh={fetchBranches} serverResponse={displayReponse} />
      {/* Add varition */}
      <EditBranchModal
        refresh={fetchBranches}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <DeleteBranchModal
        refresh={fetchBranches}
        serverResponse={displayReponse}
      />

      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={filtredBranches}
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
