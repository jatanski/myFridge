import React from 'react';
import RemoveItemButton from './RemoveItemButton';

class RemoveItem extends React.Component {
    removeItem = (item) => {
        console.log(item)
    }

    render() {
        return <RemoveItemButton  onRemove={this.removeItem}/>
    }
}

export default  RemoveItem