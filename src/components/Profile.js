import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/missions/missions';
import { selectRockets } from '../redux/rockets/rockets';

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 60rem;
  text-align: left;
`;

const WrapperCard = styled.div`
  border: 1px solid gray;
  border-radius: 3px;
  margin-top: 1rem;
  padding: 1rem;
  width: 18rem;
`;

function Profile() {
  const missions = useSelector(selectMissions);
  const rockets = useSelector(selectRockets);
  const missionsFilter = missions.filter((mission) => mission.join === true);
  const rocketsFilter = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <WrapperProfile>
      <div>
        <h2>My Missions</h2>
        {missionsFilter.map((mission) => (
          <Card key={mission.name} name={mission.name} />
        ))}
      </div>
      <div>
        <h2>My Rockets</h2>
        {rocketsFilter.map((rocket) => (
          <Card key={rocket.name} name={rocket.name} />
        ))}
      </div>
    </WrapperProfile>
  );
}

const Card = (props) => {
  const { name } = props;
  return (
    <WrapperCard>
      <h3>{name}</h3>
    </WrapperCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
