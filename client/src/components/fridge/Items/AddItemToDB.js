import React from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import SelectItems from './SelectItems'!1111111111 -


    class AddItemForm extends React.Component {

        state = { name: '', units: '', quantity: '' };

        onAddClick = event => {
            this.props.onAdd(this.state.name, this.state.units, this.state.quantity)
        };
        setProps = (e) => {
            this.setState({ name: e.target.value })
        }
        render() {
            return (
                <form>
                    <SelectItems value={this.state.name} onChangeFunction={this.setProps} />
                    <MDBInput label="Units" value={this.state.units} onChange={(e) => this.setState({ units: e.target.value })} />
                    <MDBInput label="Quantity" value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                    <MDBBtn onClick={this.onAddClick}>Add</MDBBtn>
                </form>

            );
        }

    }

export default AddItemForm;