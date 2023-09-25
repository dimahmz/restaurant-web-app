import { configureStore } from "@reduxjs/toolkit";
import pointOfSaleReducer from "./pointOfSale";
import userReducer from "./user";

export default configureStore({
    reducer: {
        pointOfSalesOrders: pointOfSaleReducer,
        user: userReducer,
    },
});
