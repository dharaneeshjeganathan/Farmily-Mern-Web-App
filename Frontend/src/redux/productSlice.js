import { createSlice } from "@reduxjs/toolkit";
 import { PRODUCTS } from "../constants"; // Ensure PRODUCTS is correctly imported

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: PRODUCTS,
    },
    reducers: {
        searchProduct: (state, action) => {
            const searchText = action.payload.toLowerCase();
            if (searchText === "") {
                state.items = PRODUCTS;
            } else {
                state.items = PRODUCTS.filter((item) =>
                    item.title.toLowerCase().includes(searchText)
                );
            }
        },
    },
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;