import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px lightgray solid;
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
            <li>
              <LinkNavComponent to="/">
                <p>Rockets</p>
              </LinkNavComponent>
            </li>
            <li>
              <LinkNavComponent to="/missions">
                <p>Mission</p>
              </LinkNavComponent>
            </li>
            <li>
              <LinkNavComponent to="/profile">
                <p>My Profile</p>
              </LinkNavComponent>
            </li>
          </ul>
        </nav>
      </Container>
    </WrapperHeader>
  );
}

const LinkNavComponent = ({ children, ...restProps }) => {
  const { to } = restProps;
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <NavLink
      to={to}
      className="nav-link"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};

LinkNavComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
