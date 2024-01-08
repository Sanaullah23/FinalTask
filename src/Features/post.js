import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get("http://localhost:5000/api/v1/getAllPoetries").then(response=>response.data);
})
const initialState = {
    loading: false,
    poetries: [],
    error: ''
}

const poetrySlice = createSlice({
    name: 'postries',
    initialState,
    extraReducers: builder=>{
        builder.addCase(fetchUsers.pending, state=>{
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false;
            state.poetries =action.payload; 
            state.error = "";
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false;
            state.poetries = [];
            state.error = action.error.message;

        })
    }
})

export default poetrySlice.reducer