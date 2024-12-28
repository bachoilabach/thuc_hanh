import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        sort: 'auto'
    },
    reducers:{
        setSort: (state,action) =>{
            state.sort = action.payload;
        }
    }
})

export default filterSlice