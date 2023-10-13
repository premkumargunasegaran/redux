import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../feature/Counter/counterSlice";
// import couterReducer from "../feature/Counter/counterSlice"
export const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});
