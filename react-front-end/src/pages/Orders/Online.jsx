import { OnlineOrder } from "../../APIs/Orders";
import NavBar from "../../components/NavBar";
import SeachHeader from "./Header";
import { useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SnackBar from "../../components/snackBar";

import "./online.css";

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
    function orderModelDetail(order) {
        setSelectedOrder(order);
        setOpenModal(true);
        console.log(order);
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
                // Calculate age in months based on the 'age' field in years
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
                        onClick={() => orderModelDetail(params.row)}
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

            <div className="bg-gray-200 h-screen ">
                <NavBar />
                {/* Table seach header component */}
                <div className="px-3">
                    <SeachHeader />
                    <div
                        style={{
                            width: "100%",
                            backgroundColor: "#ffffff",
                            padding: "14px",
                            overflowY: "auto",
                            maxHeight: "65vh",
                        }}
                    >
                        <DataGrid
                            rows={orders}
                            columns={columns}
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
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <section className="bg-white absolute top-10 left-1/2 transform -translate-x-1/2 py-3 px-5">
                            <Box>
                                <h1 className="uppercase">Order details</h1>
                                <div className="modal-row">
                                    <h1>Customer</h1>
                                    <h1>{slectedOrder?.customer}</h1>
                                </div>
                                <div>
                                    <h1>Contact</h1>
                                    <h1>{slectedOrder?.contact}</h1>
                                </div>
                                <div className="modal-row">
                                    <h1>Delivery address</h1>
                                    <h1>{slectedOrder?.delivery_address}</h1>
                                </div>
                                <div className="modal-row">
                                    <h1>Payment Method</h1>
                                    <h1>Cash On Delivery</h1>
                                </div>
                                <div className="modal-row">
                                    <h1>Branch</h1>
                                    <h1>{slectedOrder?._branch}</h1>
                                </div>
                                <div className="modal-row">
                                    <h1>Subtotal</h1>
                                    <h1>{slectedOrder?.subtotal}</h1>
                                </div>
                                <div className="modal-row">
                                    <h1>CGST</h1>
                                    <h1>{slectedOrder?.CGST}</h1>
                                </div>
                            </Box>
                        </section>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default OnlineHistoryPage;
