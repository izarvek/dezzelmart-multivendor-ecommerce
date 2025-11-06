import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groceryProductCategory: "",
  searchedViaSearchBar : "",
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setGroceryProductCategory: (state, action) => {
      state.groceryProductCategory = action.payload;
    },
    setSearchedViaSearchBar: (state, action) => {
      state.searchedViaSearchBar = action.payload;
    },
  }
});

export const { setGroceryProductCategory , setSearchedViaSearchBar} = userSlice.actions;
export default userSlice.reducer;