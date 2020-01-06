import React from 'react';
import axios from 'axios';

class FridgeContent extends React.Component {
    state = { items: [] };

    getFridgeContent = async (items) => {
        const response = await axios.get('http://localhost:8000/api/fridge', {

        });
        console.log(response.data);
        // console.log(this.setState({ items: response.data.results }));
        
    }

    render() {
        return (
            <div>
            <p>This is fridge content</p>
            <button onClick={this.getFridgeContent}>Download content</button>
            </div>
        )
    }
}

export default FridgeContent