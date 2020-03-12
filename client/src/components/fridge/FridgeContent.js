import React from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdbreact';
import ItemsDisplay from './ItemsDisplay';
import AddItem from './Items/AddItem';

class FridgeContent extends React.Component {
  state = { items: [] };

  componentDidMount() {
    if (this.props.autoLoad) {
      this.getFridgeContent();
    }
  }

  getFridgeContent = async items => {
    const response = await axios.get('http://localhost:8000/api/fridge', { headers: { 'x-auth-token': window.localStorage['x-auth-token'] } });
    this.setState({ items: response.data });
    // console.log(this.state.items);
  };

  render() {
    return (
      <div>
        {this.props.autoLoad ? null : (
          <MDBBtn outline onClick={this.getFridgeContent}>
            Show content
          </MDBBtn>
        )}
        <ItemsDisplay items={this.state.items} disableRemoving={this.props.disableRemoving} />
        {this.props.disableAdding ? null : <AddItem />}
      </div>
    );
  }
}

export default FridgeContent;
