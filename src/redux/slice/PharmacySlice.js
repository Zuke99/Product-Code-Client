import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/pharmacy/";

export const addPharmacyForm = createAsyncThunk('addPharmacyForm', async(data, {rejectWithValue}) => {
    try{
        const response = await axios.post(API_URL + "add-pharmacy-form", data);
        if(response.data.status === true){
            return response.data;
            } else {
                return rejectWithValue(response.data.message);
            }
    }catch (err) {
        return rejectWithValue(err);
    }
})

export const getAllPharmacyForms = createAsyncThunk('getAllPharmacyForms', async(data, {rejectWithValue}) => {
    try{
        const response = await axios.get(API_URL + "get-all-pharmacy", data);
       
        if(response.data.status === true){
            console.log("pharmacy response", response.data);
            return response.data;
            } else {
                return rejectWithValue(response.data.message);
            }
    }catch (err) {
        return rejectWithValue(err);
    }
})

const PharmacySlice = new createSlice({
    name : "Pharmacy",
    initialState : {
        isLoading: true,
        data: null,
        isError: false,
        message : "",
    },

    extraReducers  : (builder) => {
        builder.addCase(addPharmacyForm.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(addPharmacyForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(addPharmacyForm.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })


        builder.addCase(getAllPharmacyForms.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getAllPharmacyForms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllPharmacyForms.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })
    }
})

export default PharmacySlice.reducer;