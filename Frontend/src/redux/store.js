import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        counter:counterSlice,
        carter:cartSlice,
        product:productSlice
    },
});
export default store;