import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carter",
  initialState: {
    cart: []
  },
  reducers: {
    inc: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }
    },
    remove: (state,action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }
  }
});

export const { inc,decrement,remove } = cartSlice.actions;
export default cartSlice.reducer;