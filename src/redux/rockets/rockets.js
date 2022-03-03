import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    countRocket: 0,
  },
  reducers: {
    incrementedRocket: (state) => ({
      ...state,
      countRocket: state.countRocket + 1,
    }),
  },
});

export const { incrementedRocket } = rocketsSlice.actions;
export const selectCountRocket = (state) => state.rockets.countRocket;

export default rocketsSlice.reducer;
