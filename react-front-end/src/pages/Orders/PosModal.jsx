import { Box, Divider } from "@mui/material";

const PosModal = ({ selectedOrder }) => {
    return (
        <section className="w-full max-w-[800px]  bg-white absolute top-10 left-1/2 transform -translate-x-1/2 py-3 px-5">
            <h1 className="text-[#374A5E] font-bold">
                Order&nbsp;Details,&nbsp;Token:&nbsp;Token:&nbsp;#
                {selectedOrder.order.id}
            </h1>
            <Box>
                <Divider sx={{ marginY: 2, width: "100%" }} />
                <h1 className="py-1 text-center text-white bg-[#f64e60]">
                    Order Token
                </h1>
                <table className="w-full order-detail border-collapse mb-6">
                    <tr className="text-center">
                        <td>S/L</td>
                        <td>Food</td>
                        <td>Additional Info</td>
                        <td>QTY</td>
                        <td>Status</td>
                    </tr>
                    {selectedOrder.food_order.map((food_order, index) => (
                        <tr key={index} className="bg-[#f4f9fc] text-center">
                            <td>{index + 1}</td>
                            <td className="w-[30%]">{food_order.food.name}</td>
                            <td>
                                <span>Variation:&nbsp;</span>
                                {food_order.variation.name}
                            </td>
                            <td>{food_order.quantity}</td>
                            <td></td>
                        </tr>
                    ))}
                </table>
                <h1 className="uppercase bg-[#0dcaf0] text-white text-center py-1">
                    Order details
                </h1>
                <div className="order-details-container">
                    <div className="modal-row">
                        <p>Customer</p>
                        <p> {selectedOrder.order?.user?.name || "-"} </p>
                    </div>
                    <div className="modal-row">
                        <p>Branch</p>
                        <p> {selectedOrder.order?.branch?.name || "-"} </p>
                    </div>
                    <div className="modal-row">
                        <p>Subtotal</p>
                        <p>{selectedOrder?.order?.subtotal || "-"}</p>
                    </div>
                    <div className="modal-row">
                        <p>CGST</p>
                        <p>{selectedOrder.order?.CGST || "-"}</p>
                    </div>
                    <div className="modal-row">
                        <p>SGST</p>
                        <p>{selectedOrder?.order?.SGST || "-"}</p>
                    </div>
                    <div className="modal-row">
                        <p>Department Commission</p>
                        <p>
                            {selectedOrder?.order?.department_commission || "-"}
                        </p>
                    </div>
                    <div className="modal-row">
                        <p>Total bill</p>
                        <p>{selectedOrder?.order?.total_bill || "-"}</p>
                    </div>
                    <div className="modal-row">
                        <p>Paid amount</p>
                        <p>{selectedOrder?.order?.paid_amount || "-"}</p>
                    </div>
                    <div className="modal-row">
                        <p>Due amount</p>
                        <p> {selectedOrder?.order?.SGST || "-"}</p>
                    </div>
                </div>
            </Box>
        </section>
    );
};
export default PosModal;
