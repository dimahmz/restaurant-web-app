import { useContext, useState } from "react";
import OrderTotalChrges from "./TotalCharges";
import SnackBar from "../../../components/snackBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { OnlineOrder } from "../../../APIs/Orders";
import { Delivery_address_schema } from "../../../data-validation/Order";
import { MenuContext } from "../MenuProvider";

const OrderCheckOut = ({ foodToOrder, changePhase }) => {
    const [address, setAdress] = useState("");
    const [note, setNote] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const { onOrderSent } = useContext(MenuContext);

    async function palceOrder() {
        const { error } = Delivery_address_schema.validate(address);
        if (error) {
            console.log(error);
            setMessage(error.details[0].message);
            setOpen(true);
            return;
        }

        foodToOrder.order_delivery_address = address;
        foodToOrder.order_note_to_rider = note;

        const response = await OnlineOrder.create(foodToOrder);
        onOrderSent(response);
        changePhase(-1, null);
        // your order has been placed
    }

    function backToCart() {
        changePhase(1, foodToOrder);
    }

    return (
        <>
            <SnackBar
                message={message}
                open={open}
                handleClose={() => {
                    setOpen(false);
                }}
            />
            <div className="px-2 py-5 max-h-[75vh] overflow-y-auto w-full">
                <div className="flex-column space-y-4">
                    <button onClick={backToCart}>
                        <AiOutlineArrowLeft />
                    </button>
                    <div className="flex space-x-3">
                        <div className="h-10 w-10 bg-[#cc3333] text-white grid place-items-center">
                            <p>1</p>
                        </div>
                        <h1>Delivery Details</h1>
                    </div>
                </div>
                <form className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="address">Enter Delivery Address</label>
                        <textarea
                            name="address"
                            cols="20"
                            rows="5"
                            placeholder="Address"
                            required
                            onChange={(e) => {
                                setAdress(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="note">Note To Rider</label>
                        <input
                            name="note"
                            type="text"
                            placeholder="note to rider"
                            onChange={(e) => {
                                setNote(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <OrderTotalChrges
                            subtotal={foodToOrder.order_subtotal}
                            GGST_SGST={foodToOrder.order_GGST_SGST}
                            delivery_charge={foodToOrder.order_delivery_charge}
                            total={foodToOrder.order_total_bill}
                        />
                    </div>
                </form>
            </div>
            <div className="absolute bottom-0 py-4 w-full flex-center bg-white ">
                <button onClick={palceOrder} className="sidebar-btn">
                    Place Order
                </button>
            </div>
        </>
    );
};

export default OrderCheckOut;
