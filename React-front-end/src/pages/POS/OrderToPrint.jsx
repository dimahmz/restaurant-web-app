/* eslint-disable react/display-name */
import { Divider } from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import getDate from "../../utils/getTime";

const lineStyle = {
  borderTop: "1.5px dotted",
  borderBottom: "1.5px dotted",
  marginY: 2,
  width: "100%",
};

export const ComponentToPrint = forwardRef((props, ref) => {
  const response = useSelector((state) => state.pointOfSalesOrders.response);
  const order = response.payload;
  return (
    <div ref={ref} className="mx-16 my-10 text-sm">
      <div>
        <div className="flex-column items-center space-y-2">
          <img src="/logo.png" className="w-[50px]" alt="logo" />
          <h1 className="text-center">
            Branch: {order?.branch?.name || " - "}
          </h1>
        </div>
        <Divider
          sx={{
            ...lineStyle,
          }}
        />
        <h1 className="text-center">TOKEN NO : {order?.id || "-"}</h1>

        <h1 className="py-2">Date : {getDate(order?.created_at)} </h1>
        <h1 className="py-6">
          Payment type: {order?.payment_type?.name || "-"}
        </h1>

        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              <td className="w-[70%]">Item</td>
              <td className="w-[10%]">Qty</td>
              <td className="w-[20%]">T.Price</td>
            </tr>
          </thead>
          <tbody>
            {order?.order_food?.map(($order_food, i) => (
              <tr key={i}>
                <td className="">
                  -&nbsp;&nbsp;{$order_food?.food?.name || " - "}
                  {$order_food.variation && (
                    <span className="mx-[1px] px-[1px]">
                      ({$order_food.variation?.name || " - "})
                    </span>
                  )}
                </td>
                <td className=""> {$order_food?.quantity}</td>
                {$order_food?.food_variation ? (
                  <td className="">
                    {`${
                      +$order_food?.food_variation?.price *
                      +$order_food?.quantity
                    }  DH` || " - "}
                  </td>
                ) : (
                  <td className="">
                    {`${
                      $order_food?.food?.price * +$order_food?.quantity
                    }  DH` || " - "}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Divider sx={{ ...lineStyle }} />
        <div className="flex-column space-y-3">
          <div className="flex justify-between">
            <p className="font-bold">CGST : </p>
            <p>{order?.SGST || "-"} DH</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">SGST :</p>
            <p>{order?.SGST || "-"} DH</p>
          </div>
        </div>
        <Divider sx={{ ...lineStyle }} />
        <div className="flex justify-between">
          <p className="font-bold">SubTotal :</p>
          <p>{order?.subtotal || "-"} DH</p>
        </div>
        <Divider sx={{ ...lineStyle }} />
        <div className="flex-column space-y-3">
          <div className="flex justify-between">
            <p>Commission: </p>
            <p>{order?.department_commission || "-"} DH</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Total bill:</p>
            <p>{order?.total_bill || "-"} DH</p>
          </div>
        </div>
        <Divider sx={{ ...lineStyle }} />
        <h1 className="text-center">
          Bill prepared by {order?.user?.name || " - "}{" "}
        </h1>
      </div>
    </div>
  );
});
