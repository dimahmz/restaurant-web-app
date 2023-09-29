/* eslint-disable react/display-name */
import { Divider } from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

export const ComponentToPrint = forwardRef((props, ref) => {
  const response = useSelector((state) => state.pointOfSalesOrders.response);
  const order = response.payload;

  return (
    <div ref={ref} className="mx-16 my-10 text-lg">
      {Object.keys(order).length === 0 ? (
        <p>Error while printing the order</p>
      ) : (
        <div>
          <div className="text-center">
            <h1>Ordered by {order?.user?.name || " - "} </h1>
            <h1>At {order?.created_at} </h1>
            <h1>Branch {order?.branch?.name || " - "} </h1>
          </div>
          <Divider sx={{ marginY: 2, width: "100%" }} />
          {order?.order_food?.map(($order_food, i) => (
            <div key={i}>
              <p>Food name : {$order_food?.food?.name || " - "}</p>
              <p>Food quantity : {$order_food?.quantity || " - "}</p>
              <p>Food price : {$order_food?.food.price || " - "} DH</p>
              {$order_food?.food?.varaition && (
                <div>
                  variation : {$order_food?.food.variation?.name || " - "}
                </div>
              )}
            </div>
          ))}
          <div>
            <p className="font-bold">CGST : {order?.SGST || "-"} DH</p>
            <p className="font-bold">SGST :{order?.SGST || "-"} DH</p>
            <Divider sx={{ marginY: 2, width: "80%" }} />
            <p className="font-bold">SubTotal :{order?.subtotal || "-"} DH</p>
            <p>Commission {order?.department_commission || "-"} DH</p>
            <Divider sx={{ marginY: 2, width: "80%" }} />
            <p className="font-bold">
              Total bill :{order?.total_bill || "-"} DH
            </p>
          </div>
        </div>
      )}
    </div>
  );
});
