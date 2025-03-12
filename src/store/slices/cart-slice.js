import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Ensure cart starts as an array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// ✅ Correct Export
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
