/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import OrderTotalChrges from "./TotalCharges";

const OrderCart = ({ foodToOrder, changePhase }) => {
    const [subtotal, setSubtotal] = useState(null);
    const [GGST_SGST, setGGST_SGST] = useState(null);
    const [variation_price, setVariation_price] = useState(null);
    const [quantity, setQuantity] = useState(foodToOrder.order_quantity);
    const delivery_charge = 5;
    const [total, setTotal] = useState(null);

    useEffect(() => {
        function calculations() {
            // if food has no variation
            const $variation_price = foodToOrder.order_variation
                ? +foodToOrder.order_variation.pivot.price
                : 0;

            const $subtotal = +(
                    +(+foodToOrder.price + $variation_price) * +quantity
                ).toFixed(2),
                $GGST_SGST = +(+subtotal * 0.1).toFixed(2),
                $total = +(+subtotal + +GGST_SGST + +delivery_charge).toFixed(
                    2
                );

            setVariation_price($variation_price);
            setSubtotal($subtotal);
            setTotal($total);
            setGGST_SGST($GGST_SGST);

            foodToOrder.order_subtotal = $subtotal;
            foodToOrder.order_GGST_SGST = $GGST_SGST;
            foodToOrder.order_total_bill = $total;
            foodToOrder.order_quantity = quantity;
            foodToOrder.order_delivery_charge = delivery_charge;
        }
        calculations();
    }, [subtotal, GGST_SGST, total, quantity]);

    function addOrderToChckout() {
        changePhase(2, foodToOrder);
    }

    return (
        <>
            <div className="relative h-[50vh] w-full flex justify-between bg-white my-2">
                <div className="w-full py-2 px-4 flex-column space-y-3">
                    <div className="flex justify-between ">
                        <p>{foodToOrder.name}</p>
                        <p>
                            {(+foodToOrder.price + variation_price).toFixed(2)}
                            DH
                        </p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <ul>
                            {foodToOrder.order_variation && (
                                <li>{foodToOrder.order_variation.name}</li>
                            )}
                            {foodToOrder.order_property_items &&
                                foodToOrder.order_property_items.map(
                                    (item, i) => <li key={i}>{item.name} </li>
                                )}
                        </ul>
                        <div>
                            <input
                                className="text-center max-w-[70px] border border-black"
                                type="number"
                                min={1}
                                defaultValue={quantity}
                                onChange={(e) => {
                                    setQuantity(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <OrderTotalChrges
                subtotal={subtotal}
                GGST_SGST={GGST_SGST}
                delivery_charge={delivery_charge}
                total={total}
            />
            <div className="absolute bottom-0 py-4 w-full flex justify-center">
                <button className="sidebar-btn" onClick={addOrderToChckout}>
                    GO TO CHECKOUT
                </button>
            </div>
        </>
    );
};

export default OrderCart;
