import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  selectMissions,
  selectStatusMissions,
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
        <tr>
          <th style={styleTdTh}>Missions</th>
          <th style={styleTdTh}>Descriptions</th>
          <th style={styleTdTh}>Status</th>
          <th style={styleTdTh}>Join</th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td style={styleTdTh}>{mission.name}</td>
            <td style={styleTdTh}>{mission.description}</td>
            <td style={styleTdTh} className="td-selected">
              <p className="tag-member">NOT A MEMBER</p>
            </td>
            <td style={styleTdTh} className="td-selected">
              <Button type="button">Join Mission</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

Table.propTypes = {
  missions: PropTypes.arrayOf.isRequired,
};

export default Missions;
