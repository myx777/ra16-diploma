import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice";
import productsSlice from "../reducers/productsSlice";

export const rootReducer = combineReducers({
  search: searchSlice,
  products: productsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
