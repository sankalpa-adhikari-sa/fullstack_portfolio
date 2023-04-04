import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/dummySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})