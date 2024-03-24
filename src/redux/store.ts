import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import searchSlice from "../reducer/searchSlice";

// const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({search: searchSlice});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// sagaMiddleware.run(saga);

export default store;
