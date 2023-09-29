import { Link } from "react-router-dom";

const OrdersNavBar = () => {
  return (
    <div className="w-full flex justify-between space-x-3 ">
      <div className="px-1 flex-1">
        <Link to="/dashboard/pos-orders">
          <button className=" px-3 py-2 text-[12px] hover:bg-[#f64e60] hover:text-white duration-300 uppercase bg-white w-full h-full text-[#f64e60] border border-[#f64e60]">
            orders
          </button>
        </Link>
      </div>
      <div className="px-1 flex-1">
        <Link to="/dashboard/kitchen">
          <button className=" px-3 py-2 text-[12px] hover:bg-[#f64e60] hover:text-white duration-300 uppercase bg-white w-full h-full text-[#f64e60] border border-[#f64e60]">
            kitchen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersNavBar;
