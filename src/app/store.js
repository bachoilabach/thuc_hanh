import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/generals/Product/ProductSlice";
import cartSlice from "../components/separates/Cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store