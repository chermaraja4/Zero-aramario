import {createSlice} from '@reduxjs/toolkit';

export const pTypeSlice = createSlice({
    name:"pType",
    initialState:{},
    reducers:{
        create: (state, action) => {
            state.value = action.payload
        },
        get: (state, action) => {
            state.value = action.payload
        }
    }
});

export default pTypeSlice.reducer;