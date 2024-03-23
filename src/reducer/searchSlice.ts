import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/InitialStateType";

const initialState: InitialStateType = {
  items: [],
  loading: false,
  error: null,
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProductRequest(state) {
      console.info(state);

      state.loading = true;
      state.error = null;
    },
    searchProductSuccess(state, action) {
      console.info(action);

      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    searchProductFailure(state, action) {
      console.info(action);

      state.loading = false;
      state.error = action.payload.error;
    },
    changeSearchField(state, action) {
      console.info(action);
      console.info(state);

      state.search = action.payload;
    },
  },
});

export const { searchProductRequest, searchProductSuccess, searchProductFailure, changeSearchField } = searchSlice.actions;

export default searchSlice.reducer;