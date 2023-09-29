import { Button } from "@mui/material";
import Order from "../../APIs/Orders";
import { useState } from "react";
import AppModal from "../../components/Modal";
import "./index.css";
import getDate from "../../utils/getTime";
import { LoadingButton } from "@mui/lab";

const OrderBoxItem = ({ order, onRefrechOrder }) => {
  const [$order, setOrder] = useState(order);

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // const [status, setStatus] = useState("pending");

  const handleOpen = () => setOpen(true);

  //@TO_FIX
  // refresh may finish before changing the status
  const makeOrderReady = async ({ id }) => {
    setOpen(false);
    const response = await Order.changeStatus(id, "ready");
    await onRefrechOrder();
    if (!response.success)
      return window.alert("an error occured please try again later");
  };

  async function handleChangeStatus() {
    setIsLoading(true);
    const $status = $order.status === "pending" ? "accepted" : "pending";
    const response = await Order.changeStatus(order.id, $status);
    if (!response.success)
      return window.alert("an error occured please try again later");
    setOrder(response.payload);
    setIsLoading(false);
  }

  return (
    <section className="px-4 py-3 flex-column space-y-4 border bg-white">
      {open && (
        <AppModal
          labels={{
            cancel: "no",
            submit: "yes, cooked!",
            message: "All items are cooked?",
          }}
          open={open}
          onSubmitModal={() => makeOrderReady(order)}
          handleClose={() => setOpen(false)}
        />
      )}
      <div className="flex items-center justify-end space-x-3 text-base">
        <Button
          variant="contained"
          size="small"
          sx={{
            paddingX: "30px",
            backgroundColor: "#0cb98b",
            "&:hover": {
              backgroundColor: "#0cb98b",
            },
            textTransform: "uppercase",
          }}
          onClick={handleOpen}
        >
          order ready
        </Button>
        <LoadingButton
          sx={{
            paddingX: "30px",
            backgroundColor: "#0880ea",
            "&:hover": {
              backgroundColor: "#0880ea",
            },
          }}
          size="small"
          onClick={handleChangeStatus}
          loading={isLoading}
          loadingPosition="center"
          variant="contained"
        >
          <span>{$order.status}</span>
        </LoadingButton>
      </div>
      <table className="order-box-table w-full order-detail border-collapse">
        <thead>
          <tr className="text-center">
            <td>S/L</td>
            <td>Food</td>
            <td>Additional Info</td>
            <td>QTY</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white bg-[#f64e60]">
            <td colSpan={5}>
              <div className="font-bold flex space-x-2 px-3">
                <p>Otder Token : #{$order.id}</p>
                <p>Ordred At : {getDate($order.created_at)}</p>
              </div>
            </td>
          </tr>
          {$order.order_food.map((order_food, index) => (
            <tr key={index} className="bg-[#f4f9fc] text-center py-4">
              <td>{index + 1}</td>
              <td className="w-[30%]">{order_food.food.name}</td>
              <td>
                {order_food?.variation?.name ? (
                  <div>
                    <span>Variation:&nbsp;</span>
                    {order_food?.variation?.name}
                  </div>
                ) : (
                  "-"
                )}
              </td>
              <td>{order_food.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrderBoxItem;
