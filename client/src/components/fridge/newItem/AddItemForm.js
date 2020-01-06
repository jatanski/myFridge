import React from 'react';
import { MDBInput, MDBBtn } from "mdbreact";

class AddItemForm extends React.Component {

    state = {name: '', units: '', quantity: ''};  

    onAddClick = event => {
        this.props.onAdd(this.state.name, this.state.units, this.state.quantity)
    };

    render() {
        return (
            <form>
                <MDBInput label="Name" value= {this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                <MDBInput label="Units" value= {this.state.units} onChange={(e)=>this.setState({units: e.target.value})}/>
                <MDBInput label="Quantity" value= {this.state.quantity} onChange={(e)=>this.setState({quantity: e.target.value})}/>
                <MDBBtn onClick = {this.onAddClick}>Add</MDBBtn>
            </form>

        );
    }

}

export default AddItemForm;