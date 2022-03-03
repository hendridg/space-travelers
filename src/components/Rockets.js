import React from 'react';
import { useSelector } from 'react-redux';
import { selectRockets, selectStatusRocket } from '../redux/rockets/rockets';

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Rockets</h1>
      {status === 'done'
        && rockets.map((rocket) => (
          <div key={rocket.id}>
            <p>{`${rocket.name} ${rocket.type}`}</p>
            <img
              src={rocket.flickrImg[0]}
              alt="imagen"
              style={{ height: '250px', with: '250px' }}
            />
          </div>
        ))}
    </div>
  );
}

export default Rockets;
