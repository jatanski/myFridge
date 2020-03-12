import React from 'react';
import styled from 'styled-components';

// import { Link } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBIcon } from 'mdbreact';
import '../scss/components/Navigation.scss';

const StylingSpan = styled.span`
  margin-left:auto;
  width:1px;
  height:1px;
`;

export default function Navigation() {
  const logout = () => {
    localStorage.removeItem('x-auth-token');
  }
  return (
    <MDBNav color="default-color">
      <MDBNavLink className="white-text" to="/">
        <MDBIcon icon="home" />
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/fridge">
        Fridge
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/mealList">
        Meal List
      </MDBNavLink>
      <StylingSpan />
      <MDBNavLink onClick={logout} className="white-text" to="/login">
        Sign out
      </MDBNavLink>
    </MDBNav>
  );
}
