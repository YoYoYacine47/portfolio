import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    homeRef: null,
    skillsRef: null,
    educationRef: null,
    portfolioRef: null,
    contactRef: null,
  },
  reducers: {
    setHome: (state, action) => {
      state.homeRef = action.payload;
    },
    setSkills: (state, action) => {
      state.skillsRef = action.payload;
    },
    setEducation: (state, action) => {
      state.educationRef = action.payload;
    },
    setPortfolio: (state, action) => {
      state.portfolioRef = action.payload;
    },
    setContact: (state, action) => {
      state.contactRef = action.payload;
    },
  },
});

export const { setHome, setSkills, setEducation, setPortfolio, setContact } =
  scrollSlice.actions;

export const selectElements = (state) => state.scroll;

export default scrollSlice.reducer;
