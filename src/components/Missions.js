import React from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementedMission,
  decrementedMission,
} from '../redux/missions/missions';

function Missions() {
  const dispatch = useDispatch();
  return (
    <div>
      Missions
      <button type="button" onClick={() => dispatch(incrementedMission())}>
        Click me!
      </button>
      <button type="button" onClick={() => dispatch(decrementedMission(2))}>
        Click me!
      </button>
    </div>
  );
}

export default Missions;
