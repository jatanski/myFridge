import React from 'react';
import axios from 'axios';
import RemoveItemButton from './RemoveItemButton';

class RemoveItem extends React.Component {
    removeItem = async (item) => {
        const request = await axios.delete('http://localhost:8000/api/fridge/' + item, {
            headers: { 'x-auth-token': window.localStorage['x-auth-token'] }
        });
        console.log(request)
    }


    render() {
        return <RemoveItemButton onRemove={this.removeItem} onClick={this.RemoveItem} />
    }
}

export default RemoveItem