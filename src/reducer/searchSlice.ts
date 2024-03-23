import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/InitialStateType";

const initialState: InitialStateType = {
  search: "",
  finalSearch: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //reducer for prompting search field
    changeSearchField(state, action) {
      state.search = action.payload;
    },
    // reducer for full search field
    fullSearchField(state, action) {
        state.finalSearch = action.payload;
    },
  },
});

export const { changeSearchField, fullSearchField } = searchSlice.actions;

export default searchSlice.reducer;