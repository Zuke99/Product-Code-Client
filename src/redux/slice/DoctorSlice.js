import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/doctor/"

export const addDoctor = createAsyncThunk('addDoctor', async(data, {rejectWithValue}) => {
    try{
        const response = await axios.post(API_URL + "add-doctor", data);
        if(response.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
})

export const getAllDoctors = createAsyncThunk('getAllDoctors', async(_, {rejectWithValue}) => {
    try{
        const response = await axios.get(API_URL + "get-all-doctors");
        if(response.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
})
const DoctorSlice = createSlice({
    name : "doctor",
    initialState : {
        isLoading : true,
        data : null,
        isError : false,
        message : ""
    },
    extraReducers  : (builder) => {
        builder.addCase(addDoctor.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(addDoctor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(addDoctor.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })

        //GetAllDoctors
        builder.addCase(getAllDoctors.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getAllDoctors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllDoctors.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })

    }
});

export default DoctorSlice.reducer;