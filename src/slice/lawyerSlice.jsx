import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John Doe",
    speciality: "Divorce",
    availability: [],
    cost: 200,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Emily Clark",
    speciality: "Criminal",
    availability: [],
    cost: 100,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Michael Brown",
    speciality: "Property Dispute",
    availability: [],
    cost: 300,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Sophia Mertinez",
    speciality: "Corporate",
    availability: [],
    cost: 180,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Alice Smith",
    speciality: "Immigration",
    availability: [],
    cost: 280,
    rating: 4.2,
  },
];

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState,
  reducers: {
    updateAvailability: (state, action) => {
      const { lawyerId, date, time } = action.payload;
      const lawyer = state.find((lawyer) => lawyer.id === lawyerId);
      if (lawyer) {
        lawyer.availability[date] = lawyer.availability[date].push(time);
      }
    },
  },
});

export const { updateAvailability } = lawyerSlice.actions;
export default lawyerSlice.reducer;
