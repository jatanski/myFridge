import React from 'react';
import axios from 'axios';
import { MDBBtn } from "mdbreact";
import ItemsDisplay from './ItemsDisplay'
import AddItem from './Items/AddItem'

class FridgeContent extends React.Component {
    state = { items: [] };

    getFridgeContent = async (items) => {
        const response = await axios.get('http://localhost:8000/api/fridge', {

        });
        this.setState({ items: response.data });
        console.log(this.state.items)    
    }

    render() {
        return (
            <div>
            <MDBBtn outline onClick={this.getFridgeContent}>Show content</MDBBtn>
            <ItemsDisplay items ={this.state.items}/>
            <AddItem/>
            </div>
        )
    }
}

export default FridgeContent