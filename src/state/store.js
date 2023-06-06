import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import dataSlice from './dataSlice'

export const store = configureStore({
  reducer: {
    message: messageSlice,
    data: dataSlice,
  },
})
