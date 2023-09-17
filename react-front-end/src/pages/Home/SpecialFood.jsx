import { FaBasketShopping } from "react-icons/fa6";

const specialFood = ({ specialFood }) => {
    return (
        <>
            <div className="shadow-xl flex flex-col p-4 text-center rounded-lg hover:scale-105 duration-300">
                <div className="relative">
                    <img
                        src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                        alt="/"
                        className="block w-full h-full object-cover rounded-lg "
                    />
                    <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                        <FaBasketShopping size={20} className="" />
                    </button>
                </div>
                <h1 className="text-center text-sm text-white">
                    <span className="bg-[#cc3333] rounded-md px-2 mt-8 ">
                        special
                    </span>
                </h1>
                <h2 className="font-bold text-2xl py-4">{specialFood.name}</h2>
            </div>
        </>
    );
};

export default specialFood;
