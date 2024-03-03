import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//  HOW TO USE CREATEASYNCTHUNK API OF REDUX TOOLKIT;

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const res = await fetch('https://65ddeb7edccfcd562f55d491.mockapi.io/crud', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status  ${res.status}`)
    }
    const datares = await res.json();
    if (!datares.results) {
      throw new Error('No result in the response!')
    }
    return datares;
  } catch (error) {
    return rejectWithValue(error)
  }
})

const userDetails = createSlice({
  name: 'userDetails',
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
extraReducers(builder){
  builder
  .addCase(createUser.pending, (state)=>{
    state.loading = true;
    state.error = null
  })
  .addCase(createUser.fulfilled,(state,action)=>{
    state.loading = false;
    state.user.push(action.payload)
  })
  .addCase(createUser.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  })
}
})
export default userDetails.reducer;