import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice";
import productsSlice from "../reducers/productsSlice";
import cartSlice from "../reducers/cartSlice";

export const rootReducer = combineReducers({
  search: searchSlice,
  products: productsSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
