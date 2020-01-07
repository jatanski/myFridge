import React from 'react';
import { MDBBtn } from "mdbreact";

class RemoveItemButton extends React.Component {
    state = { item: '' }

    Remove = async (event) => {
        const itemToRemove = event.target.parentElement.getAttribute('value')
        await this.setState({ item: itemToRemove });
        this.props.onRemove(this.state.item);
    }

    render() {
        return (
            <MDBBtn outline color="danger" size="sm" onClick={this.Remove}>Remove</MDBBtn>
        )
    }
}

export default RemoveItemButton