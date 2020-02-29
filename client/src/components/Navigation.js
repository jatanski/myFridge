import React from 'react';
// import { Link } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBIcon } from 'mdbreact';
import '../scss/components/Navigation.scss';

export default function Navigation() {
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
    </MDBNav>
  );
}
