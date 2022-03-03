import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementedRocket } from '../redux/rockets/rockets';
import { selectCountMission } from '../redux/missions/missions';

function Rockets() {
  const dispatch = useDispatch();
  const count = useSelector(selectCountMission);
  return (
    <div>
      Rocket
      <button type="button" onClick={() => dispatch(incrementedRocket())}>
        {`Click me! ${count}`}
      </button>
    </div>
  );
}

export default Rockets;
