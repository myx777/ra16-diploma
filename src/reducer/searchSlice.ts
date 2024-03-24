import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/InitialStateType";

/**
 * Initial state for the searchSlice
 * @type {InitialStateType}
 */
const initialState: InitialStateType = {
  search: "",
  finalSearch: "",
};

/**
 * Redux slice for managing search state.
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    /**
     * Reducer for updating the search field.
     * @param {InitialStateType} state - The current state.
     * @param {PayloadAction<string>} action - The action containing the search value payload.
     */
    changeSearchField(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    /**
     * Reducer for setting the full search query.
     * @param {InitialStateType} state - The current state.
     * @param {PayloadAction<string>} action - The action containing the full search query payload.
     */
    fullSearchField(state, action: PayloadAction<string>) {
      state.finalSearch = action.payload;
    },
  },
});

export const { changeSearchField, fullSearchField } = searchSlice.actions;

export default searchSlice.reducer;
