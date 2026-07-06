import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps:
//create store
//wrap app componenet under Provider
//create slice
//register reducer in store