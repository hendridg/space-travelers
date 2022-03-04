import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/missions/missions';
import { selectRockets } from '../redux/rockets/rockets';

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  max-width: 60rem;
  text-align: left;
  gap: 0.5rem;
`;

const WrapperCards = styled.div`
  flex: 1;
`;

const ContainerCard = styled.div`
  border: 1px solid gray;
  flex: 1;
  border-radius: 3px;
  padding: 1rem;
  margin-top: 0.25rem;
`;

function Profile() {
  const missions = useSelector(selectMissions);
  const rockets = useSelector(selectRockets);
  const missionsFilter = missions.filter((mission) => mission.join === true);
  const rocketsFilter = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <WrapperProfile>
      <WrapperCards>
        <h2>My Missions</h2>
        {missionsFilter.map((mission) => (
          <Card key={mission.name} name={mission.name} />
        ))}
      </WrapperCards>
      <WrapperCards>
        <h2>My Rockets</h2>
        {rocketsFilter.map((rocket) => (
          <Card key={rocket.name} name={rocket.name} />
        ))}
      </WrapperCards>
    </WrapperProfile>
  );
}

const Card = (props) => {
  const { name } = props;
  return (
    <ContainerCard>
      <h3>{name}</h3>
    </ContainerCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
