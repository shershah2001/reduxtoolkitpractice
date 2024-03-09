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
// showUser action
export const showUser = createAsyncThunk('showUser', async (args, { rejectWithValue }) => {
  try {
    const res = await fetch('https://65ddeb7edccfcd562f55d491.mockapi.io/crud');
    if (!res.ok) {
      throw new Error(`HTTP error! status ${res.status}`);
    }
    const data = await res.json();
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})
// removeUser action

export const removeUser = createAsyncThunk('removeUser', async (id, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://65ddeb7edccfcd562f55d491.mockapi.io/crud/${id}`, { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`HTTP error! status ${res.status}`);
    }
    const data = await res.json();
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})
// editUser action
export const editUser = createAsyncThunk('editUser', async (data, { rejectWithValue }) => {
  console.log("updated data", data);
  try {
    const res = await fetch(`https://65ddeb7edccfcd562f55d491.mockapi.io/crud/${data.id}`, {
      method: "PUT",
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
    searchInfoData: [],
    loading: false,
    error: null,
  },
  reducers: {
    searchData(state, action) {
     state.searchInfoData = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload)
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.user = state.user.filter((ele) => ele.id !== id)
        }
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("dispatchData =>", action.payload)
        state.user = state.user.map((ele) => (
          ele.id === action.payload.id ? action.payload : ele
        ))
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})
export default userDetails.reducer;
export const { searchData } = userDetails.actions;