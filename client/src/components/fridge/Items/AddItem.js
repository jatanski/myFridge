import React from 'react';
import axios from 'axios';
import AddItemForm from './AddItemForm'



class AddItem extends React.Component {

  addItem = async (name, units, quantity) => {
    const request = await axios.post('http://localhost:8000/api/fridge', {
      product: name,
      units: units,
      avaliableQuantity: quantity
    }, {
      headers: { 'x-auth-token': window.localStorage['x-auth-token'] }
    })
    console.log(request)
  }

  render() {
    return (
      <AddItemForm onAdd={this.addItem} />)
  }
}

export default AddItem
