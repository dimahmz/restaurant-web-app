import { useSelector, useDispatch } from "react-redux";
import { modify_food_order, store_order_food } from "../../stores/pointOfSale";

const VariationsTable = () => {
  const dispatch = useDispatch();

  const selected_food = useSelector(
    (state) => state.pointOfSalesOrders.selected_food
  );
  const selectedFoodIndex = useSelector(
    (state) => state.pointOfSalesOrders.select_food_index
  );
  // const selectedFoodVariation = useSelector(
  //   (state) => state.pointOfSalesOrders.selected_food_variations
  // );

  const order_food = useSelector(store_order_food);

  function addVariation(variation) {
    console.log(variation);
    const update = { ...order_food[selectedFoodIndex] };
    update.selected_variation = variation;
    const quantity = +update.quantity;
    // update price
    update.quantity_price = (+variation.pivot.price * quantity).toFixed(2);

    dispatch(modify_food_order(update));
  }

  return (
    <div className="text-xs">
      <div>
        <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-medium border-2">
          Variations
        </div>
        {!selected_food.id ? (
          <p className="px-2 mt-7 text-center text-base">no food is selected</p>
        ) : selected_food?.variations?.length == 0 ? (
          <p className="px-2 mt-7 text-center text-base">
            Food doesn&apos;t have any variation
          </p>
        ) : (
          <table className="table-auto w-full">
            <thead className="border  text-center">
              <tr className="py-3">
                <td className="py-1">Name</td>
                <td className="py-1">Price</td>
              </tr>
            </thead>
            <tbody className="bg-[#f4f9fc] border">
              {selected_food?.variations?.map((variation, index) => (
                <tr key={index} className="border-b-2">
                  <td className="p-2 ">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox mr-2"
                        checked={
                          variation.id == selected_food?.selected_variation?.id
                        }
                        onChange={() => addVariation(variation, index)}
                      />
                      {variation.name}
                    </label>
                  </td>
                  <td className="">{variation.pivot.price} DH</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VariationsTable;
