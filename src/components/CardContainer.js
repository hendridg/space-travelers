import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const WrapperRockets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
`;

function CardContainer(props) {
  const {
    data, status, reserve, txtBtn,
  } = props;

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <WrapperRockets>
      {status === 'done'
        && data?.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            id={item.id}
            flickrImg={item.flickrImg[0]}
            reserved={item.reserved}
            reserve={reserve}
            textBtn={txtBtn}
          />
        ))}
    </WrapperRockets>
  );
}

CardContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool,
    }).isRequired,
  ).isRequired,
  status: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  txtBtn: PropTypes.arrayOf(
    PropTypes.shape({
      0: PropTypes.string.isRequired,
      1: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardContainer;
