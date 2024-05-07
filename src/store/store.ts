import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "../reducers/productsSlice";

export const rootReducer = combineReducers({
  products: productsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
