import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    img: "/img/ashton-bingham-EQFtEzJGERg-unsplash.jpg",
    name: "John Doe",
    speciality: "Divorce",
    availability: {},
    cost: 200,
    rating: 4.8,
  },
  {
    id: 2,
    img: "/img/harps-joseph-tAvpDE7fXgY-unsplash.jpg",
    name: "Marhsal Quast",
    speciality: "Criminal",
    availability: {},
    cost: 150,
    rating: 4.6,
  },
  {
    id: 3,
    img: "/img/warren-VVEwJJRRHgk-unsplash.jpg",
    name: "Michael Brown",
    speciality: "Property Dispute",
    availability: {},
    cost: 300,
    rating: 4.9,
  },
  {
    id: 4,
    img: "/img/sabrina-may-iuJClDf7S-M-unsplash.jpg",
    name: "Sophia Mertinez",
    speciality: "Corporate",
    availability: {},
    cost: 180,
    rating: 4.5,
  },
  {
    id: 5,
    img: "/img/marshal-quast-IV46f_H9PXw-unsplash.jpg",
    name: "Alice Smith",
    speciality: "Immigration",
    availability: {},
    cost: 280,
    rating: 4.2,
  },
  {
    id: 6,
    img: "/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    name: "Sabrina Campbell",
    speciality: "Civil",
    availability: {},
    cost: 300,
    rating: 4.4,
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
        if (!lawyer.availability[date]) {
          lawyer.availability[date] = [];
        }
        lawyer.availability[date].push(time);
      }
    },
  },
});

export const { updateAvailability } = lawyerSlice.actions;
export default lawyerSlice.reducer;
