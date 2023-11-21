import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:8080/company/";

export const addCompanyForm = createAsyncThunk('addComnpanyForm', async(data, {rejectWithValue}) => {
    try{

        const response = await axios.post(API_URL + "company-form", data);
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        }

    } catch (err) {
        return rejectWithValue(err);
    }
})

export const getAllCompanyForms = createAsyncThunk('getAllCOmpanyForms', async(_, {rejectWithValue}) => {
    console.log("here");
    try{

        const response = await axios.get(API_URL + "getall-company-form");
        console.log("response", response);
        if(response.data.status === true){
           
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        }

    } catch (err) {
        return rejectWithValue(err);
    }
})

export const updateCompanyFormStatus = createAsyncThunk('updateCompanyFormStatus', async(data, {rejectWithValue}) => {
    console.log("Slice data ", data);
    try{
        const response = await axios.put(API_URL + "update-approval-status", data);
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
})

const CompanyFormSlice = createSlice({
    name : "CompanyForm",
    initialState : {
        isLoading : true,
        data : null,
        isError : false,
        message : "",
        updateMessage : "",
        updateData : "",
    },
    extraReducers : (builder) => {
        builder.addCase(addCompanyForm.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(addCompanyForm.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(addCompanyForm.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            state.message =  "Error"
        })


        builder.addCase(getAllCompanyForms.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllCompanyForms.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllCompanyForms.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            state.message =  "Error"
        })

        builder.addCase(updateCompanyFormStatus.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateCompanyFormStatus.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.updateData = action.payload;
        })
        builder.addCase(updateCompanyFormStatus.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            state.updateMessage =  "Error"
        })
    }
})


export default CompanyFormSlice.reducer;