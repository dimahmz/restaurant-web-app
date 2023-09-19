import { useState } from "react";

const Products = ({ selectedFoodGroup, onSelectFood }) => {
    const [isSelected, setIsSelected] = useState(-1);

    function handleSelectFood(food, i) {
        onSelectFood(food);
        setIsSelected(i);
    }

    return !selectedFoodGroup?.foods?.length ? (
        <p className="px-4">no Food group is selected </p>
    ) : (
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {selectedFoodGroup.foods.map((food, index) => (
                <div
                    key={index}
                    className={
                        isSelected == index
                            ? "bg-[#f64e60] text-white"
                            : "text-black bg-white"
                    }
                    onClick={() => {
                        handleSelectFood(food, index);
                    }}
                >
                    <div className="shadow-lg px-1 max-w-[130px] cursor-pointer">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                className="transition duration-300 ease-in-out hover:scale-110"
                                src={food.image}
                                alt={food.name}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center text-[#121053]">
                            <div className="p-2 text-sm  uppercase flex justify-center items-center text-center font-bold">
                                {food.name}
                            </div>
                            <div className="p-2 text-sm uppercase flex justify-center items-center text-center font-bold">
                                Stock: {food.in_stock}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
