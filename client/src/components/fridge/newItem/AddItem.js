import React from 'react';
// import axios from 'axios';
import AddItemForm from './AddItemForm'


class AddItem extends React.Component {

  addItem = (name, units, quantity) => {
   console.log(name)
   console.log(units)
   console.log(quantity)
}

    render() {
        return (
          <AddItemForm onAdd={this.addItem}/>)
    }
}

export default AddItem
