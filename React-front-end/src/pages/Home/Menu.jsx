import { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import HeroSection from "./HeroSection";
import SideBarOrder from "./SideBarOrder";
import { Food } from "../../APIs/Food";
import { Branch } from "../../APIs/Restaurant";
import { MenuProvider } from "./MenuProvider";

const MenuHome = () => {
    const [foodGroups, setFoodGroups] = useState([]);
    const [branches, setBranches] = useState([]);

    const [selectedFoodGroup, setSelectedFoodGroup] = useState([]);
    const [selectedFood, setSelectedFood] = useState({});

    useEffect(() => {
        async function fetchFoods() {
            const response = await Food.get();
            if (response.success) {
                setFoodGroups(response.payload);
            }
        }

        async function fetchBranches() {
            const response = await Branch.get();
            if (response.success) {
                setBranches(response.payload);
            }
        }
        fetchFoods();
        fetchBranches();
    }, []);

    return (
        <MenuProvider>
            <SideBarOrder selectedFood={selectedFood} branches={branches} />
            <HeroSection />
            <div id="popular" className="w-full bg-white relative">
                <div className="max-w-[1140px] m-auto px-4 bg-white">
                    <h2 className="text-[#cc3333] font-serif text-center text-3xl">
                        Food Items
                    </h2>
                    <h1 className="text-[#2a435d] font-bold text-4xl text-center">
                        Popular <span className="text-[#cc3333]">Menu</span>
                    </h1>
                    {/* Food Groups */}
                    {foodGroups.length == 0 ? (
                        <div className="text-red-800 text-2xl my-24 font-medium text-center bg-white">
                            Error while trying to load Popular Menu. please
                            refresh page page or try again later
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center p-4 mt-2">
                                {foodGroups.map((food, index) => (
                                    <a key={index} href="#Selected_Food">
                                        <button
                                            className="hover:bg-[#cc3333] hover:text-white hover:bg-[url('https://khadyo.softtechdemo.com/website/images/shapes/14.png')] duration-300 font-bold border rounded border-solid w-[150px] h-[150px] p-4 m-4"
                                            onClick={() => {
                                                setSelectedFoodGroup(
                                                    food.foods
                                                );
                                            }}
                                        >
                                            {food.name}
                                        </button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Selected Food Group */}
                    <div id="Selected_Food" className="mt-4 p-4 px-8">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {selectedFoodGroup.map((food, index) => (
                                <div
                                    key={index}
                                    className="px-4 flex border-2 w-[280px] py-8 rounded hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
                                    onClick={() => {
                                        setSelectedFood(food);
                                    }}
                                >
                                    <div className="w-[100px]">
                                        <img
                                            className="rounded-full w-[100px]"
                                            src={`http://192.168.1.63:8000/storage/${food.image}`}
                                            alt={food.name}
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <h1 className="text-[#2a435d] hover:text-[#cc3333] text-xl">
                                                {food.name}
                                            </h1>
                                            <h2 className="text-[#2a435d]">
                                                {food.price} DH
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Special Food */}
                    <div id="special" className="relative bg-white ">
                        <div className="max-w-[1140px] m-auto px-4 py-28">
                            <h1 className="text-[#2a435d]  text-5xl text-center font-extrabold">
                                Explore Our
                                <span className="text-[#cc3333]">
                                    Special Menu
                                </span>
                            </h1>
                            <div className="max-w-[900px] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 m-auto px-4 mt-16 gap-x-12 gap-y-6">
                                {foodGroups.map((foodGroup) =>
                                    foodGroup.foods.map(
                                        (food, index) =>
                                            food.is_special === 1 && (
                                                <div
                                                    key={index}
                                                    className="shadow-xl flex flex-col p-4 text-center rounded-lg hover:scale-105 duration-300"
                                                    onClick={() => {
                                                        setSelectedFood(food);
                                                    }}
                                                >
                                                    <div className="relative">
                                                        <img
                                                            src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                                            alt="/"
                                                            className="block w-full h-full object-cover rounded-lg "
                                                        />
                                                        <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                                                            <FaBasketShopping
                                                                size={20}
                                                                className=""
                                                            />
                                                        </button>
                                                    </div>
                                                    <h1 className="text-center text-sm text-white">
                                                        <span className="bg-[#cc3333] rounded-md px-2 mt-8 ">
                                                            special
                                                        </span>
                                                    </h1>
                                                    <h2 className="font-bold text-2xl py-4">
                                                        {food.name}
                                                    </h2>
                                                </div>
                                            )
                                    )
                                )}
                            </div>
                            <img
                                className="hidden xl:flex absolute right-0 top-[62%]"
                                src="https://khadyo.softtechdemo.com/website/images/img/37.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MenuProvider>
    );
};

export default MenuHome;
