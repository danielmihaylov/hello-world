import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { updateMessage } = messageSlice.actions

export default messageSlice.reducer