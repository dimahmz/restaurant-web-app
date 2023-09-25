import { OnlineOrder } from "../../APIs/Orders";
import SeachHeader from "./Header";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SnackBar from "../../components/snackBar";
import "./Pos_Online.css";
import OnlineModal from "./OnlineModal";

const OnlineHistoryPage = () => {
    const [orders, setOrders] = useState([]);
    const [slectedOrder, setSelectedOrder] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    // get orders
    async function getOrders() {
        const response = await OnlineOrder.get();
        if (response.success) {
            const $orders = setUpOrders(response.payload);
            setOrders($orders);
        } else {
            setErrorMsg(response.message);
            setOpenNotification(true);
        }
    }

    useEffect(() => {
        getOrders();
    }, []);

    // edit echa order with new properties
    function setUpOrders(orders) {
        const $orders = orders.map((order) => {
            const $Date = new Date(order.created_at);
            order.date = `${$Date.getMonth()}-${$Date.getFullYear()}-${$Date.getDate()}`;
            order.time = $Date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            order._branch = order.branch.name;

            return order;
        });
        return $orders;
    }

    // delete an order
    async function deleteOrder(id) {
        const response = await OnlineOrder.delete(id);
        if (response.success) {
            await getOrders();
        } else {
            setErrorMsg(response.message);
            setOpenNotification(true);
        }
    }

    // dipaly an order detail
    async function orderModelDetail(id) {
        const resp = await OnlineOrder.getOneOrder(id);
        console.log(resp);
        if (!resp.success) {
            window.alert("Order not found, please try again later");
            return;
        }
        setSelectedOrder(resp.payload);
        setOpenModal(true);
    }
    const columns = [
        { field: "id", headerName: "S/L", flex: 1 },
        { field: "date", headerName: "Date", flex: 1 },
        { field: "time", headerName: "Time", flex: 1 },
        { field: "costumer", headerName: "customer", flex: 1 },
        {
            field: "total_bill",
            headerName: "Totall Bill",
            valueGetter: (params) => {
                return params.row.total_bill + " DH";
            },
            flex: 1,
        },
        { field: "_branch", headerName: "Branch", flex: 1 },
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
                    onClick={() => deleteOrder(params.row.id)}
                >
                    delete
                </button>
            ),
            flex: 1,
        },
    ];

    return (
        <>
            <SnackBar
                message={errorMsg}
                open={openNotification}
                handleClose={() => {
                    setOpenNotification(false);
                }}
            />

            <div className="bg-gray-200 h-screen">
                {/* Table seach header component */}
                <div className="px-3">
                    <SeachHeader
                        link={{
                            name: "pos orders",
                            path: "/dashboard/pos-orders",
                        }}
                    />
                    <div
                        style={{
                            width: "100%",
                            backgroundColor: "#ffffff",
                            padding: "14px",
                            overflowY: "auto",
                        }}
                    >
                        <DataGrid
                            rows={orders}
                            columns={columns}
                            autoHeight={true}
                            sx={{
                                minHeight: "52vh",
                            }}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </div>
                    <Modal
                        className="overflow-y-auto"
                        sx={{
                            marginBottom: 1,
                        }}
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <OnlineModal selectedOrder={slectedOrder} />
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default OnlineHistoryPage;
