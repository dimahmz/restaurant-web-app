import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderHome = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );
  return (
    <div className="relative bg-[#131313]">
      <header id="home" className=" pt-5 mb-32 bg-transparent">
        <div className="  max-w-[1140px] m-auto ">
          <div className="md:flex  md:items-center md:justify-between ">
            <div className=" mb-5 px-4 max-[16.3337%]">
              <div className="relative z-[11px] W-[140px]">
                <a className="w-100 inline-block" href="/">
                  <img
                    className=" w-32"
                    src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <ul className=" hidden lg:flex   text-[#2a435d] px-4  text-sm">
                <a href="#home">
                  <li className="p-4 font-bold hover:text-[#cc3333]">HOME</li>
                </a>
                <a href="#popular">
                  <li className="p-4 font-bold hover:text-[#cc3333]">
                    POPULAR
                  </li>
                </a>
                <a href="#special">
                  <li className="p-4 font-bold hover:text-[#cc3333]">
                    SPECIAL
                  </li>
                </a>
                <a href="#language">
                  <li className="p-4 font-bold hover:text-[#cc3333]">
                    LANGUAGE
                  </li>
                </a>
                <li className="py-4 font-bold hover:text-[#cc3333]">
                  DELIVERYMAN
                </li>
              </ul>
            </div>
            <div className=" flex  px-4 justify-between md:gap-40 lg:gap-10">
              <span className="hidden md:flex ">
                <img
                  className=" md:w-[55px]"
                  src="https://khadyo.softtechdemo.com/website/images/icons/1.png"
                  alt="/"
                />
              </span>
              <div className=" flex flex-col text-[#2a435d] ">
                <span className="mb-2 md:text-sm text-[10px]">Need Help ?</span>
                <span className=" font-bold md:text-xl text-md text-[#cc3333]">
                  09612046593
                </span>
              </div>
              <div className="flex">
                {isUserAuthenticated ? (
                  <Link to="/dashboard">
                    <button className="bg-[#cc3333] px-7 py-3  text-white text-xl md:text-2xl hover:bg-transparent hover:text-[#cc3333] border border-[#cc3333] text-center rounded-md ">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="bg-[#cc3333] px-4  text-white text-xl md:text-2xl hover:bg-transparent hover:text-[#cc3333] border border-[#cc3333] w-[140px] h-[52px] text-center rounded-md ">
                      Log in
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="hidden lg:flex absolute  h-full -z-50  w-[450px] top-0 right-[20%] bg-[#271C0A] "></div>
        <div>
          <span className="hidden lg:flex absolute -z-50 top-0 left-0 ">
            <img
              src="https://khadyo.softtechdemo.com/website/images/shapes/18.png"
              alt=""
            />
          </span>
          <span className="hidden lg:flex absolute top-[17%] left-[2%] w-[100px] ">
            <img
              src="https://khadyo.softtechdemo.com/website/images/img/7.png"
              alt=""
            />
          </span>
          <span className=" hidden lg:flex absolute top-[50%] left-[3%]">
            <img
              src="https://khadyo.softtechdemo.com/website/images/img/6.png"
              alt=""
            />
          </span>
          <span className="hidden lg:flex  absolute bottom-[3%] left-[3%]">
            <img
              src="https://khadyo.softtechdemo.com/website/images/img/5.png"
              alt=""
            />
          </span>
          <span className=" hidden lg:flex absolute bottom-0 right-0">
            <img
              src="https://khadyo.softtechdemo.com/website/images/img/9.png"
              alt=""
            />
          </span>
        </div>
        <div className=" flex  max-w-[1140px] m-auto px-4 pt-20 md:pt-24 lg:pt-40">
          <div className="justify-center items-center  ">
            <div className=" flex  px-4 ">
              <div className=" pb-20 pt-0">
                <h1 className=" text-6xl  font-extrabold text-white mb-10">
                  EAGLES HIVE
                </h1>
                <div className="text-white flex  font-bold ">
                  <div>
                    <h6 className="border text-md md:text-xl pr-6  md:pr-20 border-r-0 rounded-l-md p-4  ">
                      Bold. Delicious. Unforgettable.
                    </h6>
                  </div>
                  <span className="p-4 text-md md:text-xl pr-20 bg-[#cc3333]">
                    Savor the Flavor
                  </span>
                </div>
                <div className="flex items-center  ">
                  <img
                    className="p-4"
                    src="https://khadyo.softtechdemo.com/website/images/icons/1.png"
                    alt="/"
                  />
                  <div className="flex flex-col text-white  font-bold mt-6">
                    <span>Delivery Order Num.</span>
                    <span className="text-yellow-600  text-3xl ">
                      123123005480
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex  pt-32 ">
                <span>
                  <img
                    src="https://khadyo.softtechdemo.com/website/images/img/8.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src="https://khadyo.softtechdemo.com/public/uploads/1685846995.jpg"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="ml-14"
                    src="https://khadyo.softtechdemo.com/website/images/img/4.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src="https://khadyo.softtechdemo.com/website/images/img/3.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderHome;
