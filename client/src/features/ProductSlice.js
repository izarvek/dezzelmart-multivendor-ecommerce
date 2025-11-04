import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groceryProductCategory: "",
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setGroceryProductCategory: (state, action) => {
      state.groceryProductCategory = action.payload;
    }
  }
});

export const { setGroceryProductCategory } = userSlice.actions;
export default userSlice.reducer;