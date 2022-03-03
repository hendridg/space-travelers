import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countMission: 0,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    incrementedMission: (state) => ({
      ...state,
      countMission: state.countMission + 1,
    }),
    decrementedMission: (state, action) => ({
      ...state,
      countMission: state.countMission - action.payload,
    }),
  },
});

export const { incrementedMission, decrementedMission } = missionsSlice.actions;
export const selectCountMission = (state) => state.missions.countMission;

export default missionsSlice.reducer;
