import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';
import reducerMissions from './missions/missions';

const store = configureStore({
  reducer: {
    missions: reducerMissions,
    rockets: reducerRockets,
  },
  middleware: [thunk, logger],
});

export default store;
