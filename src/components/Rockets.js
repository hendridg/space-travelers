import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRockets,
  selectStatusRocket,
  reserve,
} from '../redux/rockets/rockets';

const WrapperRockets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
`;

const CardContainer = styled.div`
  margin: 1rem auto;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  border-radius: 5px;
  box-shadow: 10px 0px 53px -20px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 10px 0px 53px -20px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 10px 0px 53px -20px rgba(0, 0, 0, 0.43);
`;

const ImgContainer = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 5px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;

const Button = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
`;

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <WrapperRockets>
      {status === 'done'
        && rockets?.map((rocket) => (
          <CardRocket
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            id={rocket.id}
            flickrImg={rocket.flickrImg[0]}
          />
        ))}
    </WrapperRockets>
  );
}

const CardRocket = (props) => {
  const {
    id, name, description, flickrImg,
  } = props;
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <ImgContainer>
        <img
          src={flickrImg}
          alt="imagen"
          style={{
            objectFit: 'cover',
            minHeight: '300px',
            width: '100%',
          }}
        />
      </ImgContainer>
      <MainContainer>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button type="button" onClick={() => dispatch(reserve(id))}>
          Reserve Rocket
        </Button>
      </MainContainer>
    </CardContainer>
  );
};

CardRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImg: PropTypes.string.isRequired,
};

export default Rockets;
