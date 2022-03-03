import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectMissions,
  selectStatusMissions,
} from '../redux/missions/missions';

function Missions() {
  const missions = useSelector(selectMissions);
  const status = useSelector(selectStatusMissions);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
      Missions
      {status === 'done'
        && missions.map((mission) => (
          <div key={mission.id}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Missions;
