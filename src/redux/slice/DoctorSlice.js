import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://13.234.115.169:8080/doctor/"

export const addDoctor = createAsyncThunk('addDoctor', async(data, {rejectWithValue}) => {
    try{
        const response = await axios.post(API_URL + "add-doctor", data);
        console.log("adddoc response",response)
        if(response.data.status === true){
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
        //console.log("This is response", response.data)
        if(response.data.status === true){
            //console.log("This is response", response.data.data)
            return response.data.data;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
})

export const deleteDoctor = createAsyncThunk('deleteDoctor', async (doctorId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${API_URL}delete-doctor/${doctorId}`);
        if (response.data.status === true) {
            return response.data.data;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
});

const DoctorSlice = createSlice({
    name : "doctor",
    initialState : {
        isLoading : true,
        doctorData : null,
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
            state.doctorData = action.payload;
        })
        builder.addCase(getAllDoctors.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })

         //DeleteDoctor
         builder.addCase(deleteDoctor.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(deleteDoctor.fulfilled, (state, action) => {
            state.isLoading = false;
            
        })
        builder.addCase(deleteDoctor.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })

    }
});

export default DoctorSlice.reducer;