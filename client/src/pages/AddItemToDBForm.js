import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
const axios = require('axios').default;

export default function AddItemToDBForm() {

  const addProduct = async () => {
    await axios.post('/api/products', {
      name: document.getElementById('productName').value,
      type: document.getElementById('productType').value,
      units: "5dfb97fa83c1822e58c9951f"
    }).then(function (response) {
      console.log(response);
    }).then(
      alert(document.getElementById('productName').value + ' successfully added to the database!')
    ).catch(function (error) {
      console.log(error);
    }).then(
      (window.close())
    );

  }


  return (
    <MDBContainer>
      <form>
        <p className="h4 text-center text-muted">Add new product to database</p>
        <br />
        <label
          htmlFor="productName"
          className="grey-text font-weight-light"
        >
          Product name
            </label>
        <input
          type="text"
          id="productName"
          className="form-control"
        />
        <br />
        <label
          htmlFor="productType"
          className="grey-text font-weight-light"
        >
          Select type
            </label>
        <select id="productType" className="browser-default custom-select">
          <option></option>
          <option value="1">Fruits</option>
          <option value="2">Vegatables</option>
          <option value="3">Dairy</option>
          <option value="4">Meat</option>
          <option value="5">Baking</option>
          <option value="6">Drinks</option>
          <option value="7">Flour products</option>
        </select>


        <label
          htmlFor="unit"
          className="grey-text font-weight-light"
        >
          Select unit
            </label>
        <select id="unit" className="browser-default custom-select">
          <option></option>
          <option value="1">kilogram</option>
          <option value="2">gram</option>
          <option value="3">pound</option>
          <option value="4">ounce</option>
          <option value="5">liter</option>
          <option value="6">mililiter</option>
          <option value="7">pieces</option>
          <option value="8">tablespoon</option>
          <option value="9">teaspoon</option>
          <option value="10">glass</option>
          <option value="11">cup</option>
        </select>
        <div className="text-center py-4 mt-3">
          <MDBBtn outline onClick={addProduct}>
            Add
                <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </div>
      </form>




    </MDBContainer>
  );
}
