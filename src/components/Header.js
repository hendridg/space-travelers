import React from 'react';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 60rem;
`;

function Header() {
  return (
    <WrapperHeader>
      <Container>
        <div className="header-logo">
          <img src="logo.png" alt="logo space travelers" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav>
          <ul>
            <li>Rockets</li>
            <li>Mission</li>
            <li>My Profile</li>
          </ul>
        </nav>
      </Container>
    </WrapperHeader>
  );
}

export default Header;
