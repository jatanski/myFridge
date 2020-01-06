import React from 'react';
import axios from 'axios'

class SelectItems extends React.Component {

    state = { products: [] };
    getProducts = async (products) => {
        const response = await axios.get('http://localhost:8000/api/products', {

        });
        this.setState({ products: response.data })
    
    }

    render() {
        return (
            <div>
                <select className="browser-default custom-select" onClick={this.getProducts}>
                    <option>Choose product</option>
                    {this.state.products.map((item, index) => {
                        return <option value = {index + 1} >{item.name}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default SelectItems