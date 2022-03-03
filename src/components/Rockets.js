import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

  ${(props) => props.cancel
    && css`
      background: white;
      color: gray;
      border: 1px gray solid;
    `}
`;

const Span = styled.span`
  background-color: #1ca3b9;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  padding: 0.2rem;
  margin-right: 0.5rem;
  border-radius: 2px;
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
            reserved={rocket.reserved}
          />
        ))}
    </WrapperRockets>
  );
}

const CardRocket = (props) => {
  const {
    id, name, description, flickrImg, reserved,
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
        <p>
          {reserved ? (
            <div>
              <p>
                <Span>Reserved</Span>
                {description}
              </p>
            </div>
          ) : (
            description
          )}
        </p>
        <Button
          type="button"
          cancel={reserved}
          onClick={() => dispatch(reserve(id))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </MainContainer>
    </CardContainer>
  );
};

CardRocket.defaultProps = {
  reserved: false,
};

CardRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImg: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Rockets;
