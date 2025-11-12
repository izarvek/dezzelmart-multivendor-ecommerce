import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groceryProductCategory: "",
  searchedViaSearchBar: "",
  filteredAssets: [],
  sortViaOption: "",
  addToCartItems: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setGroceryProductCategory: (state, action) => {
      state.groceryProductCategory = action.payload;
    },
    setSearchedViaSearchBar: (state, action) => {
      state.searchedViaSearchBar = action.payload;
    },
    setFilteredAssets: (state, action) => {
      state.filteredAssets = action.payload;
    },
    setSortViaOption: (state, action) => {
      state.sortViaOption = action.payload;
    },
    setAddToCart: (state, action) => {
      state.addToCartItems.push(action.payload);
    },
  },
});

export const {
  setGroceryProductCategory,
  setSearchedViaSearchBar,
  setFilteredAssets,
  setSortViaOption,
  setAddToCart, 
} = productSlice.actions;

export default productSlice.reducer;
