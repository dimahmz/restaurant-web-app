import { useState, useEffect } from "react";
import KitchenHeader from "./Header";
import OrderBox from "./OrderBox";
import Order from "../../APIs/Orders";
import { CircularProgress } from "@mui/material";
import Filter from "../../utils/filters";

const KitchenPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [filtredOrders, setFiltredOrders] = useState([]);

  // get orders
  async function getOrders() {
    setIsLoading(true);
    const response = await Order.getKitchenOrders();
    setIsLoading(false);

    if (response.success) {
      setOrders(response.payload);
      setFiltredOrders(response.payload);
    } else {
      window.alert("an error occurred, please try again or refresh page");
      setOrders([]);
    }
  }

  // filter the data based on the header search inputs
  function onFilter({ branchId, id }) {
    let $filteredRows = [...orders];

    const filtredById = Filter.byId($filteredRows, id);
    $filteredRows = [...filtredById];

    const filtredByBranch = Filter.byBranchId($filteredRows, branchId);
    $filteredRows = [...filtredByBranch];

    setFiltredOrders($filteredRows);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="px-4">
      <div className="mb-3 sticky top-0 w-full z-[100] header-shadow">
        <KitchenHeader
          onRefrechOrder={() => getOrders()}
          handleFilter={onFilter}
        />
      </div>
      {isLoading ? (
        <div className="w-full h-full flex justify-center mt-28 z-[1000000] backdrop-blur-sm bg-white/0">
          <CircularProgress color="primary" />
        </div>
      ) : filtredOrders.length == 0 ? (
        <p className="pt-16 text-center text-2xl ">No order found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7">
          {filtredOrders.map((order, i) => (
            <OrderBox
              key={i}
              order={order}
              onRefrechOrder={() => getOrders()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KitchenPage;
