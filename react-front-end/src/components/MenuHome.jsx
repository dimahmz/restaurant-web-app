import { FaBasketShopping } from "react-icons/fa6";
import PopularFood from "./PopularFood";
import axios from "../utils/axios";
import { useEffect, useState } from "react";

const MenuHome = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFoods() {
            const response = await axios.get("/foods");
            if (response.data.success) {
                setFoods(response.data.payload);
            }
        }
        fetchFoods();
    }, []);

    return (
        <div>
            <div className="w-full bg-white pt-32 pb-20">
                <div className="max-w-[1140px] m-auto px-2 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className=" flex flex-col">
                            <div className="flex">
                                <div className=" flex flex-col justify-end mb-5 px-4">
                                    <img
                                        className="w-[128px]"
                                        src="https://khadyo.softtechdemo.com/public/uploads/15580323046403b7be857807.94833105.jfif"
                                        alt=""
                                    />
                                </div>
                                <div className="mb-5 px-4">
                                    <img
                                        className=" w-72"
                                        src="https://khadyo.softtechdemo.com/public/uploads/184303169161f24d7062aa06.92256101.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="px-4">
                                    <img
                                        className=" w-52"
                                        src="https://khadyo.softtechdemo.com/public/uploads/208568374761f24d705d7de9.51172771.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 ">
                                    <div className=" flex flex-col items-center justify-center border-solid rounded w-48 h-40 text-white  bg-[#cc3333]">
                                        <img
                                            src="https://khadyo.softtechdemo.com/website/images/icons/3.png"
                                            alt=""
                                        />
                                        <h3 className="text-3xl font-bold">
                                            5000+
                                        </h3>
                                        <h3 className="text-lg">Food items</h3>
                                    </div>
                                    <img
                                        className=" bottom-0 right-[100%]"
                                        src="https://khadyo.softtechdemo.com/website/images/shapes/2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" relative flex flex-col  justify-center p-4">
                            <span>
                                <img
                                    className="absolute right-0 top-[50%]"
                                    src="https://khadyo.softtechdemo.com/website/images/shapes/1.png"
                                    alt=""
                                />
                            </span>
                            <h1 className="text-[#2a435d] text-6xl font-extrabold">
                                Fresh Taste At A Great Price
                            </h1>
                            <p className="text-gray-600 mt-4">
                                Food is a restaurant, bar and coffee roastery
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <PopularFood foods={foods} />
            <div id="special" className="relative bg-white ">
                <div className="max-w-[1140px] m-auto px-4 py-28">
                    <h1 className="text-[#2a435d]  text-5xl text-center font-extrabold">
                        Explore Our
                        <span className="text-[#cc3333]"> Special Menu</span>
                    </h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1240px] m-auto px-4  bg-white">
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                        <div className=" shadow-2xl flex flex-col p-4  my-4 text-center m-4 rounded-lg hover:scale-105 duration-300">
                            <div className="relative h-[250px]  mt-24 mb-6 ">
                                <img
                                    src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                    alt="/"
                                    className=" block  w-full h-full   object-cover rounded-lg "
                                />
                                <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                    <FaBasketShopping size={20} className="" />
                                </button>
                            </div>
                            <h1 className="text-center text-sm text-white">
                                <span className="bg-[#cc3333]  rounded-md px-2 mt-8 ">
                                    special
                                </span>
                            </h1>
                            <h2 className="font-bold text-3xl mt-8 mb-8">
                                Pizza Rida
                            </h2>
                        </div>
                    </div>
                </div>
                <img
                    className="hidden xl:flex absolute right-0 top-[62%]"
                    src="https://khadyo.softtechdemo.com/website/images/img/37.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default MenuHome;
