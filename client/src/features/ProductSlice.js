import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groceryProductCategory: "",
  searchedViaSearchBar: "",
  filteredAssets: [],
  sortViaOption : "",

};

const productSlice = createSlice({
  name: 'product',
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
    setSortViaOption : (state , action ) => {
      state.sortViaOption = action.payload;
    }
  }
});

export const { 
  setGroceryProductCategory, 
  setSearchedViaSearchBar,
  setFilteredAssets,
  setSortViaOption, 
} = productSlice.actions;

export default productSlice.reducer;