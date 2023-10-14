import { useLocation } from "react-router-dom";
import { Box, CircularProgress, Divider } from "@mui/material";

// {location.pathname === "/dashboard/pos-orders" ? (
const PosModal = ({ selectedOrder, isDetailLoading }) => {
  let location = useLocation();
  // location.pathname === "/dashboard/pos-orders" ?

  return (
    <section className="w-full h-full max-w-[800px] bg-white fixed top-10 left-1/2 transform -translate-x-1/2 py-3 px-5">
      {isDetailLoading ? (
        <div className="flex-center w-full min-h-[50vh]">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <h1 className="text-[#374A5E] font-bold">
            Order&nbsp;Details,&nbsp;Token:&nbsp;Token:&nbsp;#
            {selectedOrder?.id || "-"}
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
              {selectedOrder.order_food.map((order_food, index) => (
                <tr key={index} className="bg-[#f4f9fc] text-center py-1">
                  <td>{index + 1}</td>
                  <td className="w-[30%]">{order_food.food.name}</td>
                  <td>
                    {order_food?.variation?.name && (
                      <div>
                        <span>Variation:&nbsp;</span>
                        {order_food?.variation?.name}
                      </div>
                    )}
                  </td>
                  <td>{order_food.quantity}</td>
                  <td></td>
                </tr>
              ))}
            </table>
            <h1 className="uppercase bg-[#0dcaf0] text-white text-center py-1">
              Order details
            </h1>
            <div className="order-details-container">
              <div className="modal-row">
                {location.pathname === "/dashboard/online-orders" ? (
                  <>
                    <p>Customer</p>
                    <p> {selectedOrder?.user?.name || "-"} </p>
                  </>
                ) : (
                  <>
                    <p>Received By</p>
                    <p> {selectedOrder?.user?.name || "-"} </p>
                  </>
                )}
              </div>
              <div className="modal-row">
                <p>Branch</p>
                <p> {selectedOrder?.branch?.name || "-"} </p>
              </div>
              {location.pathname === "/dashboard/online-orders" && (
                <div className="modal-row">
                  <p>Delivery Address</p>
                  <p className="w-1/2 text-center">
                    {selectedOrder?.delivery_address || "-"}
                  </p>
                </div>
              )}
              {location.pathname === "/dashboard/online-orders" && (
                <div className="modal-row">
                  <p>Payment Method</p>
                  <p> Cash on Delivery</p>
                </div>
              )}
              <div className="modal-row">
                <p>Subtotal</p>
                <p>{selectedOrder?.subtotal + " DH" || "-"}</p>
              </div>
              <div className="modal-row">
                <p>CGST</p>
                <p>{selectedOrder?.CGST + " DH" || "-"}</p>
              </div>
              <div className="modal-row">
                <p>SGST</p>
                <p>{selectedOrder?.SGST || "-"}</p>
              </div>
              {!(location.pathname === "/dashboard/online-orders") && (
                <div className="modal-row">
                  <p>Department Commission</p>
                  <p>{selectedOrder?.department_commission + " DH" || "-"}</p>
                </div>
              )}
              <div className="modal-row">
                <p>Total bill</p>
                <p>{selectedOrder?.total_bill + " DH" || "-"}</p>
              </div>
              {!(location.pathname === "/dashboard/online-orders") && (
                <>
                  <div className="modal-row">
                    <p>Paid amount</p>
                    <p>{selectedOrder?.paid_amount || "-"}</p>
                  </div>
                  <div className="modal-row">
                    <p>Due amount</p>
                    <p> {selectedOrder?.due_amount + " DH" || "-"}</p>
                  </div>
                </>
              )}
            </div>
          </Box>
        </>
      )}
    </section>
  );
};
export default PosModal;
