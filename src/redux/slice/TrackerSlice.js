import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/tracker/";

export const updateTracker = createAsyncThunk("updateTracker", async(data, {rejectWithValue}) => {

    try{
        console.log("before")
        const response = await axios.put(API_URL + "update-tracker", data);
        console.log("Tracker Response", response);
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        } 
    } catch (err) {
        return rejectWithValue(err);
    }
})
export const getTracker = createAsyncThunk("getTracker", async(_ ,{rejectWithValue}) => {
    
    try{
        const response = await axios.get(API_URL + "get-tracker");
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        } 
    } catch (err) {
        return rejectWithValue(err);
    }
})


const TrackerSlice = new createSlice({
    name : "Tracker",
    initialState : {
        isLoading: true,
        data: null,
        isError: false,
        message : "",
        getMessage : "",
        getData : null
    },

    extraReducers  : (builder) => {
        builder.addCase(updateTracker.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(updateTracker.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(updateTracker.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })


        builder.addCase(getTracker.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getTracker.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getData = action.payload;
        })
        builder.addCase(getTracker.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })
    }
})

export default TrackerSlice.reducer;