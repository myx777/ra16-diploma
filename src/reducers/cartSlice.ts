import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsAtCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductToCart: (state, action) => {
      // console.info(action.payload);
      state.productsAtCart = [...state.productsAtCart, action.payload];
      console.log(state)


    },
  },
});

export const { setProductToCart } = cartSlice.actions;
export default cartSlice.reducer;