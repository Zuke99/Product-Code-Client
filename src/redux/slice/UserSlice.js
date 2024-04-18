import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAuthenticatedAxios } from "../axiosAuth";
const API_URL = "http://13.234.115.169:8080/user/"
const token = JSON.parse(localStorage.getItem("userToken"));



export const loginUser = createAsyncThunk("l0ginUser", async (data, {rejectWithValue}) => {
    try{
        const response = await axios.post(API_URL + "user-login", data);
        //console.log("login response", response);
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data);
        }
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const isUserLoggedIn = createAsyncThunk("isUserLoggedIn", async(_, {rejectWithValue}) => {
    // console.log("isLoggedInResponse",)
    try{
        const authenticatedAxios = createAuthenticatedAxios();
        const response = await authenticatedAxios.get(API_URL + "isLoggedIn", token);
        console.log("isloggeninn Response", response);
        if(response.data.status === true){
            return response.data;
        } else {
            return rejectWithValue(response.data.result);
        } 
    } catch (error){
        return rejectWithValue(error.response.data)
    }
})


const UserSlice  = new createSlice({
    name :"User",
    initialState : {
        isLoading : true,
        isError : false,
        data : null,
        message : ""
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = false;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        })
    }
})

export default UserSlice.reducer;