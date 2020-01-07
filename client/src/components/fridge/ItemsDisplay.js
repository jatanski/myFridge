import React from 'react';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import RemoveItem from './Items/RemoveItem';

const ItemsDisplay = props => {
  const items = props.items.map((item, index) => {
    return (
      <tr id="item-column" key={index}>
        <td>{index + 1}</td>
        <td>{item.product.name}</td>
        <td>{item.units}</td>
        <td>{item.avaliableQuantity}</td>
        {props.disableRemoving ? null : (
          <td value={item._id}>
            <RemoveItem />
          </td>
        )}
      </tr>
    );
  });
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBTable bordered>
        <MDBTableHead>
          <tr>
            <th>Index</th>
            <th>Item</th>
            <th>Units</th>
            <th>Quantity</th>
            {props.disableRemoving ? null : <th>Actions</th>}
          </tr>
        </MDBTableHead>
        <MDBTableBody>{items}</MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
  //<div>{items}</div>;
};

export default ItemsDisplay;
