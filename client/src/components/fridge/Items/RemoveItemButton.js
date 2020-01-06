import React from 'react';
import { MDBBtn } from "mdbreact";

class RemoveItemButton extends React.Component {
    state = { item: '' }

    RemoveClick = async (event) => {
        const button = event.target
        const id = button.parentElement.parentElement.children[1].textContent
        await this.setState({ item: id });
        this.props.onRemove(this.state.item);
    }

    render() {
        return (
            <MDBBtn outline color="danger" size="sm" onClick={this.RemoveClick}>Remove</MDBBtn>
        )
    }
}

export default RemoveItemButton