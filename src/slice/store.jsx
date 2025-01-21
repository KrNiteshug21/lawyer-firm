import { configureStore } from "@reduxjs/toolkit";
import lawyerReducer from "./lawyerSlice";
import appointmentReducer from "./appointmentSlice";

export const store = configureStore({
  reducer: {
    lawyers: lawyerReducer,
    appointment: appointmentReducer,
  },
});
