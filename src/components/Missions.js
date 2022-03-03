import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMissions,
  selectStatusMissions,
  joined,
} from '../redux/missions/missions';

const WrapperMissions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 60rem;
  text-align: left;
`;

const Button = styled.button`
  border: gray 1px solid;
  color: gray;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  ${(props) => props.joined
    && css`
      background: white;
      color: red;
      border: 1px red solid;
    `}
`;

const Tag = styled.p`
  background-color: gray;
  font-weight: bold;
  font-size: 0.8rem;
  color: white;
  padding: 0.125rem 0.2rem;
  text-align: center;
  border-radius: 3px;

  ${(props) => props.join
    && css`
      background: #1ca3b9;
      color: #fff;
      font-size: 0.8rem;
      font-weight: bold;
    `}
`;

function Missions() {
  const missions = useSelector(selectMissions);
  const status = useSelector(selectStatusMissions);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <WrapperMissions>
      {status === 'done' && <Table missions={missions} />}
    </WrapperMissions>
  );
}

const Table = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();
  const styleTable = {
    borderCollapse: 'collapse',
    width: '100%',
  };
  const styleTdTh = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <table style={styleTable}>
        <thead>
          <tr>
            <th style={styleTdTh}>Missions</th>
            <th style={styleTdTh}>Descriptions</th>
            <th style={styleTdTh}>Status</th>
            <th style={styleTdTh}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td style={styleTdTh}>{mission.name}</td>
              <td style={styleTdTh}>{mission.description}</td>
              <td style={styleTdTh} className="td-selected">
                <Tag join={mission.join}>
                  {mission.join ? 'Active Member' : 'NOT A MEMBER'}
                </Tag>
              </td>
              <td style={styleTdTh} className="td-selected">
                <Button
                  type="button"
                  joined={mission.join}
                  onClick={() => dispatch(joined(mission.id))}
                >
                  {mission.join ? 'Leave Mission' : 'Join Mission'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      join: PropTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default Missions;
