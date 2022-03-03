import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducerRockets from './rockets/rockets';
import reducerMissions from './missions/missions';

const store = configureStore({
  reducer: {
    missions: reducerMissions,
    rockets: reducerRockets,
  },
  middleware: [logger],
});

export default store;
