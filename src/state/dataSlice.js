import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  isLoading: false,
}

export const fetchData = createAsyncThunk('data/fetchData', () => {
  return fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .catch((err) => console.log(err))
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export default dataSlice.reducer