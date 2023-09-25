/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import SelectedOrderOption from "./OptionSelector";
import SideBarOrderHeader from "./Header";
import SelectedOrderCheckOut from "./CheckOut";
import SelectedOrderCart from "./Cart";

const ShopBasketHome = ({ selectedFood, branches }) => {
    // when a new food is selected
    useEffect(() => {
        changePhase(0, null);
    }, [selectedFood]);

    const [displaySideBar, setDisplaySideBar] = useState(false);

    const [displayPhase, setPhaseToDisplay] = useState([true, false, false]);

    const [Order, setOrder] = useState(null);

    //
    function changePhase(phaseNumber, order) {
        setPhaseToDisplay((prev) => {
            const update = prev.map(() => false);
            if (phaseNumber >= 0) update[phaseNumber] = true;
            else {
                setDisplaySideBar(false);
            }
            return update;
        });
        setOrder(order);
    }

    function OnCloseSideBar() {
        setDisplaySideBar(false);
    }

    return (
        <div className="fixed z-[100] top-[35%] right-0 bg-[#cc3333] rounded-l-lg overflow-y-auto px-3">
            <div
                className="py-3 px-2 cursor-pointer"
                onClick={() => setDisplaySideBar(true)}
            >
                <div className="flex-col text-white space-y-2">
                    <div className="flex space-x-2">
                        <HiShoppingCart size={18} className="mt-1" />
                        <p>0 item</p>
                    </div>
                    <div className="py-2 px-1 rounded-md text-[#cc3333] bg-white flex justify-between">
                        {selectedFood.hasOwnProperty("id") ? (
                            <p>{selectedFood.price}</p>
                        ) : (
                            <p>0.00</p>
                        )}
                        <p>DH</p>
                    </div>
                </div>
            </div>

            <aside className="bg-gray-100 fixed z-60 top-0 right-[-100%] max-w-[350px] overflow-y-auto pb-3">
                <div
                    className={
                        displaySideBar
                            ? "bg-gray-100 fixed h-screen z-[100] right-0 pb-16 lg:w-[350px]"
                            : ""
                    }
                >
                    <div className="mx-3 my-4 ">
                        <SideBarOrderHeader OnCloseSideBar={OnCloseSideBar} />
                    </div>
                    <div className="mx-3 my-2">
                        {/* when the order is selected */}
                        {displayPhase[0] && (
                            <SelectedOrderOption
                                OrderselectedFood={selectedFood}
                                branches={branches}
                                changePhase={changePhase}
                            />
                        )}
                        {/* after the order is selected it procceeds to the checkout pahse*/}
                        {displayPhase[1] && (
                            <SelectedOrderCart
                                foodToOrder={Order}
                                changePhase={changePhase}
                            />
                        )}
                        {/* final phase for the order to be send  */}
                        {displayPhase[2] && (
                            <SelectedOrderCheckOut
                                foodToOrder={Order}
                                changePhase={changePhase}
                            />
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default ShopBasketHome;
