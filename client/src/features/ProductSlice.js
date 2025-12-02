import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groceryProductCategory: "",
  searchedViaSearchBar: "",
  filteredAssets: [],
  sortViaOption: "",
  addToCartItems: [],
  addToWishlistItems: [],
  shippingDetailCalculation : [],
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
    setRemoveFromCart: (state, action) => {
        const slugToRemove = action.payload;
        state.addToCartItems = state.addToCartItems.filter(
            item => item.urlSlug !== slugToRemove
        );
    },
    setAddToWishlist : (state , action) => {
      state.addToWishlistItems.push(action.payload)
    },
    setRemoveFromWishlist : (state , action) => {
     const slugToRemove = action.payload;
     state.addToWishlistItems = state.addToWishlistItems.filter(
      item => item.urlSlug !== slugToRemove
     );
    },
    setShippingDetailCalculation : (state , action ) => {
      state.shippingDetailCalculation = action.payload;
    }
  },
});

export const {
  setGroceryProductCategory,
  setSearchedViaSearchBar,
  setFilteredAssets,
  setSortViaOption,
  setAddToCart,
  setRemoveFromCart,
  setAddToWishlist,
  setShippingDetailCalculation,
} = productSlice.actions;

export default productSlice.reducer;
