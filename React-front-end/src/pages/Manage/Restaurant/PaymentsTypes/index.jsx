import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { PaymentType } from "../../../../APIs/Restaurant";
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
import AddPaymentTypeModal from "./addPayment";
import EditPaymentTypeModal from "./editPayment";
import DeletePaymentTypeModal from "./deletePayment";
import SnackBar from "../../../../components/snackBar";
import getResponseMessage from "../../../../utils/getResponse";

const Branches = () => {
  const dispatch = useDispatch();

  const [Payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtredPayments, setFiltredPayments] = useState([]);
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  async function fetchPaymentTypes() {
    setIsLoading(true);
    const response = await PaymentType.get();
    if (response.success) {
      setPayments(response.payload);
      setFiltredPayments(response.payload);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPaymentTypes();
  }, []);

  function displayReponse($response) {
    const message = getResponseMessage($response);
    setResponse(() => ({
      open: true,
      message,
      severity: $response.success ? "success" : "error",
    }));
  }

  function filterPaymentTypes(e) {
    const name = e.target.value;
    const $filtredPayments = Filter.byName(Payments, name);
    setFiltredPayments($filtredPayments);
  }

  const columns = [
    { field: "id", headerName: "S/L", flex: 1 },
    { field: "name", headerName: "name", flex: 1 },
    { field: "unique_key", headerName: "Unique Key", flex: 1 },

    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <DotsMenu
            onClick={() => {
              dispatch(
                set_selected_item({
                  name: "selectedPaymentType",
                  value: params.row,
                })
              );
            }}
          >
            <MenuItem
              onClick={() => {
                dispatch(
                  toggle_edit_modal({
                    name: "openEditPaymentTypeModal",
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
                    name: "openDeletePaymentTypeModal",
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
        title="Payment Type List"
        handleSearchChange={filterPaymentTypes}
        onAddNew={() => {
          dispatch(
            toggle_add_item_modal({
              name: "openAddPaymentTypeModal",
              value: true,
            })
          );
        }}
      />
      {/* Modals */}

      {/* Add varition */}
      <AddPaymentTypeModal
        refresh={fetchPaymentTypes}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <EditPaymentTypeModal
        refresh={fetchPaymentTypes}
        serverResponse={displayReponse}
      />
      {/* Add varition */}
      <DeletePaymentTypeModal
        refresh={fetchPaymentTypes}
        serverResponse={displayReponse}
      />

      <div className="w-full h-[370px] px-4 py-4 ">
        <DataGrid
          rows={filtredPayments}
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
