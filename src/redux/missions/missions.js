import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countMission: 0,
  statusMissions: 'idle',
  missions: [],
};

export const fetchApiMissions = createAsyncThunk(
  'missions/fetchApiMissions',
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);

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
    joined: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          if (!mission.join) {
            return { ...mission, join: true };
          }
          return { ...mission, join: !mission.join };
        }
        return mission;
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiMissions.pending, (state) => ({
        ...state,
        statusMissions: 'loading',
      }))
      .addCase(fetchApiMissions.fulfilled, (state, action) => {
        const arrayMissions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        }));
        return {
          ...state,
          statusMissions: 'done',
          missions: arrayMissions,
        };
      });
  },
});

export const { incrementedMission, decrementedMission, joined } = missionsSlice.actions;
export const selectCountMission = (state) => state.missions.countMission;
export const selectMissions = (state) => state.missions.missions;
export const selectStatusMissions = (state) => state.missions.statusMissions;

export default missionsSlice.reducer;
