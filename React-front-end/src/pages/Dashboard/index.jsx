import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { MdManageHistory } from "react-icons/md";
import { UseAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const dashboardElements = [
  {
    to: "/dashboard/pos",
    imgSrc: "https://khadyo.softtechdemo.com/assets/img/product-img-2.jpg",
    icon: <HiShoppingCart size={20} />,
    title: "POS",
    description: "Point Of Sales",
  },
  {
    to: "/dashboard/online-orders",
    imgSrc: "https://khadyo.softtechdemo.com/assets/img/product-img-3.jpg",
    icon: <HiShoppingCart size={20} />,
    title: "ORDERS",
    description: "Orders Histories",
  },
  {
    to: "/dashboard/kitchen",
    imgSrc: "https://khadyo.softtechdemo.com/assets/img/product-img-9.jpg",
    icon: <HiShoppingCart size={20} />,
    title: "KITCHEN",
    description: "Kitchen",
  },
  {
    to: "/dashboard/manage/food/",
    imgSrc: "https://khadyo.softtechdemo.com/assets/img/product-img-8.png",
    icon: <MdManageHistory size={20} />,
    title: "MANAGE",
    description: "Manage",
  },
];

const DashboardPage = () => {
  const { LogoutUser } = UseAuth();

  return (
    <div className=" bg-gray-200">
      <section className=" mt-4 mb-2 pt-6 pb-16">
        <div className="max-w-[1320px] m-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            {dashboardElements.map((element, index) => (
              <Link key={index} to={element.to}>
                <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                  <div>
                    <img src={element.imgSrc} alt="" />
                    <div className=" p-8 relative">
                      <div className="flex text-purple-700 font-bold text-sm">
                        {element.icon}
                        <span>{element.title}</span>
                      </div>
                      <div className="text-3xl font-bold py-2">
                        {element.description}
                      </div>
                      <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                        <AiOutlinePlus size={40} className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
                  <MdManageHistory size={20} />
                  <span>LOGOUT</span>
                </div>
                <div className="text-3xl font-bold py-2">Logout</div>
                <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                  <AiOutlinePlus size={40} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
