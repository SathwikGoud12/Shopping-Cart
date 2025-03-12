import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice"; // Ensure correct path

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
