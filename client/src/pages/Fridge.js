import React from 'react';
import '../scss/pages/app.scss';
import { MDBContainer } from 'mdbreact';
import FridgeContent from '../components/FridgeContent'

function Fridge() {
  return (
      <MDBContainer className="mt-5 text-center">
        <h4>Welcome to your fridge</h4>
        <FridgeContent/>
      </MDBContainer>
      );
}

export default Fridge;