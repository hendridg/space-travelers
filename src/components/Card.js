import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const Card = (props) => {
  const {
    id, name, description, flickrImg, textBtn, reserved, reserve,
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
        {reserved ? (
          <div>
            <p>
              <Span>Reserved</Span>
              {description}
            </p>
          </div>
        ) : (
          <p>{description}</p>
        )}
        <Button
          type="button"
          cancel={reserved}
          onClick={() => dispatch(reserve(id))}
        >
          {reserved ? textBtn[0] : textBtn[1]}
        </Button>
      </MainContainer>
    </CardContainer>
  );
};

Card.defaultProps = {
  reserved: false,
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textBtn: PropTypes.arrayOf({
    0: PropTypes.string.isRequired,
    1: PropTypes.string.isRequired,
  }).isRequired,
  flickrImg: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};

export default Card;
