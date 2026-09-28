
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils";

// Get logged-in user
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${base_url}/auth/verifyuser`,
        {
          withCredentials: true,
        }
      );

      return response.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
        "Unable to fetch user"
      );
    }
  }
);


// Initial State
const initialState = {
  info: null,
  isLoading: false,
  isError: false,
  isUser: false,
};


// Slice
const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    logoutUser: (state) => {
      state.info = null;
      state.isUser = false;
      state.isError = false;
    },
    adduserData:(state,action)=>{
   
      state.info= action.payload
    },
    toggleArticles:(state,action)=>{
     const isSaved =  state.info.savedArticles.some(item=>item.toString() === action.payload.toString())

if (isSaved) {
    
      state.info.savedArticles = state.info.savedArticles.filter(
        (item) =>
          item.toString() !== action.payload.toString()
      );
    } else {
      
      state.info.savedArticles.push(action.payload.toString());
    }


    }
  },

  extraReducers: (builder) => {

    // Pending
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    // Fulfilled
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;

      if (action.payload?.success) {
        state.info = action.payload.user;
        state.isUser = true;
      } else {
        state.info = null;
        state.isUser = false;
      }
    });

    // Rejected
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.info = null;
      state.isUser = false;
    });

  },
});

export const { logoutUser,adduserData,toggleArticles } = userSlice.actions;

export default userSlice.reducer;