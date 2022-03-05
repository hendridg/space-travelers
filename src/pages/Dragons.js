import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectDragons,
  selectStatusDragons,
  reserve,
} from '../redux/dragons/dragons';
import CardContainer from '../components/CardContainer';

function Dragons() {
  const dragons = useSelector(selectDragons);
  const status = useSelector(selectStatusDragons);
  const txtBtn = ['Cancel Reservation', 'Reserve Dragon'];

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <CardContainer
      data={dragons}
      status={status}
      reserve={reserve}
      txtBtn={txtBtn}
    />
  );
}

export default Dragons;
