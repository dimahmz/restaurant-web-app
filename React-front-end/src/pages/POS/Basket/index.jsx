/* eslint-disable react/prop-types */
import {
  store_order_food,
  delete_food_order,
  update_index,
  modify_food_order,
} from "../../../stores/pointOfSale";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";

const BasketComponent = () => {
  const dispatch = useDispatch();

  const order_food = useSelector(store_order_food);

  const selectedFoodIndex = useSelector(
    (state) => state.pointOfSalesOrders.select_food_index
  );

  function handleSelcetedFoodInOrder(food, index) {
    dispatch(update_index({ index, food }));
  }

  const selected_food = useSelector(
    (state) => state.pointOfSalesOrders.selected_food
  );

  function updateQuantity(quantity) {
    const $selected_food = { ...selected_food };

    // update quantity
    $selected_food.quantity = quantity;
    // get variation if selected
    const variation_price =
      +$selected_food.selected_variation?.pivot?.price || 0;

    // update price
    $selected_food.quantity_price = (
      (+$selected_food.price + variation_price) *
      $selected_food.quantity
    ).toFixed(2);

    dispatch(modify_food_order($selected_food));
  }

  // className="border-collapse border border-slate-400"
  return (
    <div className="relative w-full bg-white px-2 py-2">
      <BasketHeader />
      <div className="h-[59%] overflow-y-auto py-1">
        {order_food.length === 0 ? (
          <p className="text-red-800 text-center py-2">
            Select food item to add to the list
          </p>
        ) : (
          <div className="flex flex-col-reverse">
            {order_food.map(($food, index) => (
              <div
                className="border-b-[1px] border-slate-600 text-sm"
                key={index}
              >
                <div
                  className={`
                                border-[1px] border-slate-600 flex items-center px-1 cursor-pointer
                                ${
                                  selectedFoodIndex == index
                                    ? "bg-[#f64e60] text-white basket-order"
                                    : "text-black basket-order"
                                }`}
                  onClick={() => handleSelcetedFoodInOrder($food, index)}
                >
                  <span className="w-12">{index + 1}</span>
                  <div className="w-full">
                    <div className="flex-column">
                      <div className="flex-center-between px-2 py-3">
                        <section>
                          <p>{$food.name}</p>
                          <div className="py-2">
                            {$food.selected_variation.hasOwnProperty(
                              "name"
                            ) && (
                              <p>
                                Variations&nbsp;:&nbsp;
                                <span className="text-black text-[10px] bg-[#f4bd0e] rounded-full p-2">
                                  {$food.selected_variation.name}
                                </span>
                              </p>
                            )}
                            {$food?.property_items &&
                              (<p>Properties</p>)(
                                $food.property_items.map((item, i) => (
                                  <span
                                    key={i}
                                    className="text-black text-[8px] bg-[#f4bd0e] rounded-full p-2"
                                  >
                                    {item.name}
                                  </span>
                                ))
                              )}
                          </div>
                        </section>
                        <span
                          className="bg-[#158df7] rounded-md flex-center w-7 h-7 cursor-pointer"
                          onClick={() => {
                            dispatch(delete_food_order(index));
                          }}
                        >
                          <FaTrash size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-center">
                    <input
                      className="border-2 border-slate-600 w-11 text-black"
                      type="number"
                      defaultValue={1}
                      min={1}
                      onChange={(e) => {
                        updateQuantity(e.target.value);
                      }}
                      id="quantity"
                    />
                  </div>
                  <div className="text-center w-[120px] pl-1">
                    {$food.quantity_price} DH
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BasketFooter />
    </div>
  );
};

export default BasketComponent;
