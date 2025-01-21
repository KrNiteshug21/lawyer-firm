import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: [],
  addApointment: (state, action) => {
    const newAppoint = {
      ...action.payload,
      id: state.length + 1,
    };

    state.push(newAppoint);
  },
});

export const { addApointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
