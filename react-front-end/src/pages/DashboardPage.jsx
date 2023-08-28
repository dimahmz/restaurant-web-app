import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { UseAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";

import { MdManageHistory } from "react-icons/md";
import NavBar from "../PosComponents/NavBar";
import Footer from "../PosComponents/Footer";

const DashboardPage = () => {
    const { LogoutUser } = UseAuth();

    return (
        <div className=" bg-gray-200 h-screen">
            <NavBar />
            <section className=" mt-4 h-[600px] overflow-scroll mb-2 ">
                <div className="max-w-[1320px] m-auto px-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                        <Link to="/dashboard/pos">
                            {" "}
                            <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                                <div>
                                    <div>
                                        <img
                                            src="https://khadyo.softtechdemo.com/assets/img/product-img-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-8 relative">
                                        <div className="flex text-purple-700 font-bold text-sm">
                                            <HiShoppingCart size={20} />{" "}
                                            <span>POS</span>
                                        </div>
                                        <div className="text-3xl font-bold py-2">
                                            Point Of Sales
                                        </div>
                                        <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                            <AiOutlinePlus
                                                size={40}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard/orders">
                            {" "}
                            <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                                <div>
                                    <div>
                                        <img
                                            src="https://khadyo.softtechdemo.com/assets/img/product-img-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-8 relative">
                                        <div className="flex text-purple-700 font-bold text-sm">
                                            <HiShoppingCart size={20} />{" "}
                                            <span>ORDERS</span>
                                        </div>
                                        <div className="text-3xl font-bold py-2">
                                            Orders Histories
                                        </div>
                                        <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                            <AiOutlinePlus
                                                size={40}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard/customers">
                            {" "}
                            <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                                <div>
                                    <div>
                                        <img
                                            src="https://khadyo.softtechdemo.com/assets/img/product-img-4.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-8 relative">
                                        <div className="flex text-purple-700 font-bold text-sm">
                                            <CgProfile size={20} />{" "}
                                            <span>CUSTOMERS</span>
                                        </div>
                                        <div className="text-3xl font-bold py-2">
                                            Customers
                                        </div>
                                        <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                            <AiOutlinePlus
                                                size={40}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard/kitchen">
                            {" "}
                            <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                                <div>
                                    <div>
                                        <img
                                            src="https://khadyo.softtechdemo.com/assets/img/product-img-9.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-8 relative">
                                        <div className="flex text-purple-700 font-bold text-sm">
                                            <HiShoppingCart size={20} />{" "}
                                            <span>KITCHEN</span>
                                        </div>
                                        <div className="text-3xl font-bold py-2">
                                            Kitchen
                                        </div>
                                        <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                            <AiOutlinePlus
                                                size={40}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dashboard/manage/food/add-new">
                            <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                                <div>
                                    <div>
                                        <img
                                            src="https://khadyo.softtechdemo.com/assets/img/product-img-8.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-8 relative">
                                        <div className="flex text-purple-700 font-bold text-sm">
                                            <MdManageHistory size={20} />{" "}
                                            <span>MANAGE</span>
                                        </div>
                                        <div className="text-3xl font-bold py-2">
                                            Manage
                                        </div>
                                        <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                            <AiOutlinePlus
                                                size={40}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div
                            className="mb-4 px-2 bg-white shadow-lg cursor-pointer"
                            onClick={LogoutUser}
                        >
                            <img
                                src="https://khadyo.softtechdemo.com/assets/img/product-img-6.jpg"
                                alt=""
                            />
                            <div className=" p-8 relative">
                                <div className="flex text-purple-700 font-bold text-sm">
                                    <MdManageHistory size={20} />{" "}
                                    <span>LOGOUT</span>
                                </div>
                                <div className="text-3xl font-bold py-2">
                                    Logout
                                </div>
                                <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                                    <AiOutlinePlus size={40} className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
{
    /* <Link to="/">
<AiTwotoneHome size={25} />
</Link>
<AiOutlineLogout
size={25}
className="hover:cursor-pointer"
onClick={LogoutUser}
/> */
}
export default DashboardPage;
