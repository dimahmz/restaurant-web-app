import { configureStore } from "@reduxjs/toolkit";
import pointOfSaleReducer from "./pointOfSale";
import userReducer from "./user";
import manageFoodReducer from "./manageFood";

export default configureStore({
  reducer: {
    pointOfSalesOrders: pointOfSaleReducer,
    user: userReducer,
    manageFood: manageFoodReducer,
  },
});
