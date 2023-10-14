import { useSelector, useDispatch } from "react-redux";
import { add_food_order } from "../../stores/pointOfSale";

const Products = () => {
  const imgUrl = new URL(import.meta.env.VITE_APP_IMAGES_HOST).href;

  const dispatch = useDispatch();

  const $selected_food = useSelector(
    (state) => state.pointOfSalesOrders.selected_food
  );
  const selectedGroupFood = useSelector(
    (state) => state.pointOfSalesOrders.selected_group_food
  );

  function handleSelectFood(newFood) {
    const $newFood = { ...newFood };
    const variation = $newFood.variations[0] || null;
    $newFood.selected_property_items = [];
    $newFood.selected_variation = variation || {};
    $newFood.quantity = 1;
    $newFood.quantity_price = variation
      ? variation.pivot.price
      : $newFood.price;
    $newFood.branch_id = null;
    $newFood.user_id = null;
    dispatch(add_food_order($newFood));
  }

  return !selectedGroupFood?.foods ? (
    <p className="px-4 mt-14 font-medium text-xl">
      No group of food is selected!
    </p>
  ) : selectedGroupFood.foods.length == 0 ? (
    <p className="px-4 mt-14 font-medium text-xl">
      Group without any food item!
    </p>
  ) : (
    <div className="py-2 grid grid-cols-2 gap-x-2 gap-y-3">
      {selectedGroupFood.foods.map((food, index) => (
        <div
          key={index}
          className={`${
            food.id == $selected_food.id
              ? "bg-[#de222a] text-white"
              : "text-black bg-white"
          }
                shadow-lg w-full cursor-pointer
                `}
          onClick={() => {
            handleSelectFood(food, index);
          }}
        >
          <div className="w-full overflow-hidden">
            <img
              className="block transition duration-300 ease-in-out hover:scale-125 w-full h-full "
              src={`${imgUrl}/${food.image}`}
              alt={food.name}
            />
          </div>
          <div className="flex-center flex-col gap-y-2 py-2">
            <p className="break-all text-sm text-center uppercase font-bold">
              {food.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
