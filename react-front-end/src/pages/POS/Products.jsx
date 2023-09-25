import { useSelector, useDispatch } from "react-redux";
import { add_food_order } from "../../stores/pointOfSale";

const Products = () => {
    const dispatch = useDispatch();

    const $selected_food = useSelector(
        (state) => state.pointOfSalesOrders.selected_food
    );

    const selectedGroupFood = useSelector(
        (state) => state.pointOfSalesOrders.selected_group_food
    );

    function handleSelectFood(newFood) {
        const $newFood = { ...newFood };
        $newFood.selected_property_items = [];
        $newFood.selected_variation = {};
        $newFood.quantity = 1;
        $newFood.quantity_price = $newFood.price;
        $newFood.branch_id = null;
        $newFood.user_id = null;
        dispatch(add_food_order($newFood));
    }

    return !selectedGroupFood?.foods ? (
        <p className="px-4 mt-14 font-medium text-xl">
            Select a group to get the a list of food
        </p>
    ) : (
        <div className="grid grid-cols-2 gap-x-2 gap-y-3 ">
            {selectedGroupFood.foods.map((food, index) => (
                <div
                    key={index}
                    className={`${
                        food.id == $selected_food.id
                            ? "bg-[#de222a] text-white"
                            : "text-black bg-white"
                    }
                shadow-lg px-1 max-w-[130px] cursor-pointer
                `}
                    onClick={() => {
                        handleSelectFood(food, index);
                    }}
                >
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="transition  duration-300 ease-in-out hover:scale-110"
                            src={`http://192.168.1.106:8000/storage/${food.image}`}
                            alt={food.name}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="w-[100px] break-all flex-center flec-col  p-2 text-sm text-center uppercase font-bold">
                            {food.name}
                        </p>
                        <div className="p-2 text-sm uppercase flex justify-center items-center text-center font-bold">
                            Stock: {food.in_stock}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
