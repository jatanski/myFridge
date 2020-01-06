import React from 'react';
import { Link } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBIcon } from 'mdbreact';
import '../scss/components/Navigation.scss';

export default function Navigation() {
  return (
    <MDBNav color="grey">
      <MDBNavLink className="white-text" to="/">
        <MDBIcon icon="home" />
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/example">
        READ ME!
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/example">
        Example
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/register">
        Register
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/login">
        Login
      </MDBNavLink>
      <MDBNavLink className="white-text" to="/mealList">
        Meal List
      </MDBNavLink>
    </MDBNav>
  );
}
