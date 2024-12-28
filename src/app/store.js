import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/generals/Product/ProductSlice";
import cartSlice from "../components/separates/Cart/cartSlice";
import filterSlice from "../components/generals/Filter/filterSlice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        filter: filterSlice.reducer
    }
})

export default store