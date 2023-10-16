import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SeachHeader from "./Header";
import OrderDetailModal from "./OrderDetail";
import SnackBar from "../../components/snackBar";
import Order, { OnlineOrder, PosOrder } from "../../APIs/Orders";
import { Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ConfirmModal from "../../components/ConfirmModal";
import "./styles/Pos_Online.css";
import { getTime, getYearMonthDay } from "../../utils/getTime";
import Filter from "../../utils/filters";

const OnlineHistoryPage = () => {
  let location = useLocation();
  const [orders, setOrders] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailLoading, setIDetailLoading] = useState(false);
  const [isDeleteLoading, setisDeleteLoading] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);

  // get orders
  async function getOrders() {
    let response = null;
    setIsLoading(true);

    location.pathname === "/dashboard/pos-orders"
      ? (response = await PosOrder.get())
      : (response = await OnlineOrder.get());

    setIsLoading(false);

    if (response.success) {
      const $orders = response.payload;
      setOrders($orders);
      setFilteredRows($orders);
    } else {
      setErrorMsg(response.message);
      setOpenNotification(true);
    }
  }

  useEffect(() => {
    getOrders();
  }, [location]);

  // delete an order
  async function deleteOrder() {
    setisDeleteLoading(true);
    const response = await Order.delete(orderIdToDelete);
    setisDeleteLoading(false);
    setOpenConfirmModal(false);
    if (response.success) {
      await getOrders();
    } else {
      setErrorMsg(response.message);
      setOpenNotification(true);
    }
  }

  // when the table's filter in the header changes
  function searchChange(id) {
    filterChange({ branchId: null, id });
  }
  function branchChange(branchId) {
    filterChange({ branchId, id: null });
  }

  // filter the data based on the search header inputs
  function filterChange({ branchId, id }) {
    let $filteredRows = [...orders];
    const filtredById = Filter.byId($filteredRows, id);
    $filteredRows = [...filtredById];
    const filtredByBranchId = Filter.byBranchId($filteredRows, branchId);
    $filteredRows = [...filtredByBranchId];
    setFilteredRows($filteredRows);
  }

  // dipaly an order detail
  async function orderModelDetail(id) {
    setOpenModal(true);
    setIDetailLoading(true);
    const resp = await PosOrder.getOneOrder(id);
    setIDetailLoading(false);
    if (!resp.success) {
      window.alert("Order not found, please try again later");
      return;
    }
    setSelectedOrder(resp.payload);
  }

  const columns = [
    { field: "_index", headerName: "S/L", flex: 1 },
    {
      field: "id",
      headerName: "Token",
      flex: 1,
      renderCell: (params) => (
        <span className="text-[#158DF7]">{"#" + params.row.id}</span>
      ),
    },
    {
      field: "_time",
      headerName: "Time",
      valueGetter: (params) => getTime(params.row.created_at),
      flex: 1,
    },
    {
      field: "_date",
      headerName: "Date",
      valueGetter: (params) => getYearMonthDay(params.row.created_at),
      flex: 1,
    },
    {
      field: "total_bill",
      headerName: "Totall Bill",
      valueGetter: (params) => params.row.total_bill + " DH",
      flex: 1,
    },
    {
      field: "_branch",
      headerName: "Branch",
      valueGetter: (params) => params.row.branch?.name,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <div className="flex justify-center">
          <button
            className="text-[#0bab80] bg-[#bafbe9] py-1 px-3 rounded"
            style={{ cursor: "pointer" }}
            onClick={() => orderModelDetail(params.row.id)}
          >
            {params.row.status}
          </button>
        </div>
      ),
      flex: 1,
    },
    {
      field: "no_field",
      headerName: "Action",
      renderCell: (params) => (
        <button
          className="bg-red-400 text-white py-1 px-2 rounded"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpenConfirmModal(true);
            setOrderIdToDelete(params.row.id);
          }}
        >
          delete
        </button>
      ),
      flex: 1,
    },
  ];

  return (
    <div className="w-full h-full pt-4">
      <SnackBar
        message={errorMsg}
        open={openNotification}
        handleClose={() => {
          setOpenNotification(false);
        }}
      />
      <ConfirmModal
        labels={{
          message: "You want to delete this group?",
          cancel: "No",
          submit: "Delete",
        }}
        open={openConfirmModal}
        handleClose={() => setOpenConfirmModal(false)}
        onSubmitModal={deleteOrder}
        isLoading={isDeleteLoading}
      />

      {/* Table seach header component */}
      <div className="px-3">
        <SeachHeader
          onSearchChange={searchChange}
          branchChange={branchChange}
        />
        <div className="bg-white my-2 l h-full overflow-auto">
          <DataGrid
            sx={{
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
                border: "none",
              },
            }}
            rows={filteredRows.map((row, i) => ({
              _index: i + 1,
              ...row,
            }))}
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
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <OrderDetailModal
            selectedOrder={selectedOrder}
            isDetailLoading={isDetailLoading}
          />
        </Modal>
      </div>
    </div>
  );
};

export default OnlineHistoryPage;
