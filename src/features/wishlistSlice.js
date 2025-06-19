import { createSlice } from "@reduxjs/toolkit";

const localWishList = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: localWishList,
  reducers: {
    addToWishList: (state, action) => {
      const id = action.payload;
      if (!state.includes(id)) {
        state.push(id);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },

    deleteWishList: (state, action) => {
      const id = action.payload;
      const newState = state.filter((itemId) => itemId !== id);
      localStorage.setItem("wishlist", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToWishList, deleteWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
