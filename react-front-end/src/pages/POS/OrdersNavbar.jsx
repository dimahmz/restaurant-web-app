import { Link } from "react-router-dom";

const OrdersNavBar = () => {
    return (
        <div className="w-full flex justify-between space-x-3 ">
            <div className="px-1 flex-1">
                <Link to="/dashboard/pos-orders">
                    <button className=" px-3 py-2 text-[12px] hover:bg-[#f64e60] hover:text-white duration-300 uppercase bg-white w-full h-full text-[#f64e60] border border-[#f64e60]">
                        Online orders
                    </button>
                </Link>
            </div>
            <div className="flex justify-center text-[12px] text-white ">
                {/* <div className="pr-1">
                    <button className="p-2 w-full rounded-sm uppercase  bg-[#0dd19d]">
                        settled
                    </button>
                </div> */}
                <div>
                    <Link to="/dashboard/pos-orders">
                        <button className="py-2 px-8 w-full rounded-sm uppercase  bg-[#f64e60]">
                            submitted
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrdersNavBar;
