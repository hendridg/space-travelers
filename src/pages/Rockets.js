import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectRockets,
  selectStatusRocket,
  reserve,
} from '../redux/rockets/rockets';
import CardContainer from '../components/CardContainer';

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);
  const txtBtn = ['Cancel Reservation', 'Reserve Rocket'];

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <CardContainer
      data={rockets}
      status={status}
      reserve={reserve}
      txtBtn={txtBtn}
    />
  );
}

export default Rockets;
