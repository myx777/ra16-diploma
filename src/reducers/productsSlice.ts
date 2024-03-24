import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null,
    item: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {

            console.info(action.payload);
            console.info(state);
            
            
            state.id = action.payload
        },
    
    }

});

export const { setProduct } = productsSlice.actions;

export default productsSlice.reducer;