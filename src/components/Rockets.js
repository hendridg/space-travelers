import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  selectRockets,
  selectStatusRocket,
  reserve,
} from '../redux/rockets/rockets';
import Card from './Card';

const WrapperRockets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
`;

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <WrapperRockets>
      {status === 'done'
        && rockets?.map((rocket) => (
          <Card
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            id={rocket.id}
            flickrImg={rocket.flickrImg[0]}
            reserved={rocket.reserved}
            reserve={reserve}
            textBtn={['Cancel Reservation', 'Reserve Rocket']}
          />
        ))}
    </WrapperRockets>
  );
}

export default Rockets;
