import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  selectDragons,
  selectStatusDragons,
  reserve,
} from '../redux/dragons/dragons';
import Card from './Card';

const WrapperDragons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
`;

function Dragons() {
  const dragons = useSelector(selectDragons);
  const status = useSelector(selectStatusDragons);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <WrapperDragons>
      {status === 'done'
        && dragons?.map((dragon) => (
          <Card
            key={dragon.id}
            name={dragon.name}
            description={dragon.description}
            id={dragon.id}
            flickrImg={dragon.flickrImg[0]}
            reserved={dragon.reserved}
            reserve={reserve}
            textBtn={['Cancel Reservation', 'Reserve Dragon']}
          />
        ))}
    </WrapperDragons>
  );
}

export default Dragons;
