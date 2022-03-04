import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  statusDragons: 'idle',
  dragons: [],
};

export const fetchApiDragons = createAsyncThunk(
  'rockets/fetchApiDragons',
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const newDragons = state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          if (!dragon.reserved) {
            return { ...dragon, reserved: true };
          }
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
      return {
        ...state,
        dragons: newDragons,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiDragons.pending, (state) => ({
        ...state,
        statusRocket: 'loading',
      }))
      .addCase(fetchApiDragons.fulfilled, (state, action) => {
        const arrayDragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          flickrImg: dragon.flickr_images,
          description: dragon.description,
        }));
        return {
          ...state,
          statusDragons: 'done',
          dragons: arrayDragons,
        };
      });
  },
});

export const { reserve } = dragonsSlice.actions;
export const selectDragons = (state) => state.dragons.dragons;
export const selectStatusDragons = (state) => state.dragons.statusDragons;

export default dragonsSlice.reducer;
