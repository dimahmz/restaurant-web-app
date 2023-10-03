import { useEffect, useState } from "react";
import TableHeader from "../tableHader";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { MenuItem, TextField } from "@mui/material";
import FormModal from "../../../components/FormModal";
import SnackBar from "../../../components/snackBar";
import DotsMenu from "../../../components/dotsMenu";
import ConfirmModal from "../../../components/ConfirmModal";
import { Group } from "../../../APIs/Food";
import Filter from "../../../utils/filters";

const GroupItems = () => {
  const [Groups, setGroups] = useState([]);
  const [filtredGroups, setFiltredGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [submitGroupLoading, selectedGroupLoading] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [SnackBarMessage, setSnackBarMessage] = useState("");
  const [selectedGroup, setSelectedGroup] = useState({ name: "", id: null });

  function resetSelectedGroup() {
    setSelectedGroup({ name: "", id: null });
  }
  function changeSelectedGroup(e) {
    const name = e.target.value;
    setSelectedGroup((prev) => ({
      ...prev,
      name,
    }));
  }

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

  const columns = [
    { field: "_index", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu>
            <MenuItem
              onClick={() => {
                setSelectedGroup(params.row);
                setOpenEditModal(true);
              }}
            >
              <div className="flex items-center space-x-2">
                <MdModeEdit />
                <p>edit</p>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSelectedGroup(params.row);
                setOpenConfirmModal(true);
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

  // create
  async function AddFoodGroup() {
    const name = selectedGroup.name;
    if (!name) return;
    selectedGroupLoading(true);
    const response = await Group.create(name);
    if (!response.success)
      window.alert("An error was occurred, please try again later");
    else {
      setSnackBarMessage(response.message);
      setOpenSnackBar(true);
      fetchGroup();
      resetSelectedGroup();
    }
    selectedGroupLoading(false);
  }

  // update
  async function updateGroup() {
    const name = selectedGroup.name;
    if (!name) return;
    selectedGroupLoading(true);
    const response = await Group.update(selectedGroup.id, name);
    if (!response.success)
      window.alert("An error was occurred, please try again later");
    else {
      setSnackBarMessage(response.message);
      setOpenSnackBar(true);
      fetchGroup();
    }
    selectedGroupLoading(false);
  }

  // delete
  async function deleteGroup() {
    setIsDeleteLoading(true);
    const response = await Group.delete(selectedGroup.id);
    if (response.success) {
      setOpenConfirmModal(false);
      fetchGroup();
    }
    setIsDeleteLoading(false);
  }

  return (
    <div className="bg-white h-full">
      <ConfirmModal
        labels={{
          message: "You want to delete this group?",
          cancel: "No",
          submit: "Delete",
        }}
        open={openConfirmModal}
        handleClose={() => setOpenConfirmModal(false)}
        onSubmitModal={deleteGroup}
        isLoading={isDeleteLoading}
      />

      <FormModal
        labels={{ title: "Edit Group" }}
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        onSubmitForm={updateGroup}
        isLoading={submitGroupLoading}
      >
        <div className="py-3 px-4 flex-col space-y-4">
          <label htmlFor="new-group-name">Name</label>
          <TextField
            name="new-group-name"
            fullWidth
            hiddenLabel
            defaultValue={selectedGroup.name}
            size="small"
            variant="filled"
            onChange={changeSelectedGroup}
            required
          />
        </div>
      </FormModal>
      <FormModal
        labels={{ title: "Add new Group" }}
        open={openFormModal}
        handleClose={() => setOpenFormModal(false)}
        onSubmitForm={AddFoodGroup}
        isLoading={submitGroupLoading}
      >
        <div className="py-3 px-4 flex-col space-y-4">
          <label htmlFor="group_name">Name</label>
          <TextField
            required
            name="group_name"
            fullWidth
            hiddenLabel
            defaultValue={selectedGroup.name}
            placeholder="e.g Burger, Chiken"
            size="small"
            variant="filled"
            onChange={changeSelectedGroup}
          />
        </div>
      </FormModal>
      <TableHeader
        title="Goup Item List"
        handleSearchChange={filterGroup}
        onAddNew={() => {
          resetSelectedGroup();
          setOpenFormModal(true);
        }}
      />
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
        message={SnackBarMessage}
        open={openSnackBar}
        severity="success"
        handleClose={() => {
          setOpenSnackBar(false);
        }}
        sx={{ background: "#07bc0c", color: "#fff", marginBottom: "50px" }}
      />
    </div>
  );
};

export default GroupItems;
