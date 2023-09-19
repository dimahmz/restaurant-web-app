/* eslint-disable react/prop-types */
import BasketHeader from "./BasketHeader";
import Order from "../../APIs/Orders";

const BasketComponent = ({ children, Dept_tag, FoodToOrder }) => {
    async function createOrder() {
        const food = FoodToOrder[0];
        const order = {
            food_id: food.id,
            variation_id: food.variation_item.id,
            property_items: food.property_items.map((item) => item.id),
            branch_id: 2,
            user_id: 1,
            quantity: "",
            subtotal: 1,
            totall_bill: "",
            paid_amount: "",
            due_amount: "",
            department_commission: Dept_tag.commission,
        };
        const response = await Order.create(order);
        console.log(response);
    }

    return (
        <div className=" relative pl-[10px] bg-white w-[480px] h-[611.2px] ">
            <div className="p-4 h-full">
                <div className="w-[100%] h-[100%] mt-[10px]">
                    <div className="mt-[10px]">
                        <div className=" max-h-[350px] overflow-y-auto">
                            <table className="w-full">
                                <BasketHeader />
                                {/* tabke body */}
                                {children}
                            </table>
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <div>
                            <div className="flex">
                                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                                    <p className=" py-[5px]">Sub Total</p>
                                    <span className="py-[5px]">DH</span>
                                </div>
                                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold text-center">
                                    <span className=" py-[5px]">
                                        cgst+sgst(5+5)%:
                                    </span>
                                    <span className="py-[5px]"></span>
                                </div>
                            </div>
                            <div className="py-4 flex justify-center space-x-6 bg-[#f4f9fc] border text-[12px] font-bold">
                                <span>Department Tag Commission :</span>
                                <span>
                                    {Dept_tag.commission
                                        ? Dept_tag.commission
                                        : "0.00"}
                                </span>
                            </div>
                        </div>
                        <div className="px-[10px] bg-[#f64e60] flex justify-between">
                            <p className="pt-2 pb-[10px] text-white font-bold">
                                Total Bill
                            </p>
                            <p className="pt-2 pb-[10px] text-white font-bold">
                                {} DH
                            </p>
                        </div>
                        <div className="mt-[10px] flex justify-end">
                            <button
                                className="mr-2 text-white px-4 py-2 font-bold bg-[#f64e60] rounded-[2px]"
                                onClick={createOrder}
                            >
                                SETTLE
                            </button>
                            <button className=" text-white px-4 py-2 font-bold bg-[#0dd19d] rounded-[2px]">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketComponent;
