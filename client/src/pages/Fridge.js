import React from 'react';
import '../scss/pages/app.scss';
import { MDBContainer, MDBBtn } from 'mdbreact';
import FridgeContent from '../components/fridge/FridgeContent'

const displayForm = () => {
  window.open('AddItemToDB', '_blank',
   'width=600,height=700,left=200,top=200,location=no,manubar=no,status=no,titlebar=no,toolbar=no');
}

function Fridge() {
  return (
      <MDBContainer className="mt-5 text-center">
        <h4>Welcome to your fridge</h4>
        <FridgeContent/>
        <br />
        <div style={{display: "flex", flexDirection: 'column' }} >
            <MDBBtn onClick={displayForm} outline style={{ alignSelf: "flex-end" }} size="sm" color="blue-grey" >Add new product to database</MDBBtn>
        </div>
      </MDBContainer>
      );
}

export default Fridge;