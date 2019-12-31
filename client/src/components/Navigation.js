import React from 'react';
import { Link } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';
import '../scss/components/Navigation.scss';

export default function Navigation() {
  return (
    <MDBNav>
      <MDBNavLink to="/">Logo</MDBNavLink>
      <MDBNavLink to="/example">READ ME!</MDBNavLink>
      <MDBNavLink to="/example">Example</MDBNavLink>
    </MDBNav>
  );
}
