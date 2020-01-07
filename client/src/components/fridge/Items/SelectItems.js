import React from 'react';
import axios from 'axios'

class SelectItems extends React.Component {
    constructor(props) {    
        super(props) 
        this.state = { products: [] };
    }
    
    getProducts = async (products) => {
        const response = await axios.get('http://localhost:8000/api/products', {

        });
        this.setState({ products: response.data })
    
    }

    render() {
        return (
                <select id ='select' className="browser-default custom-select" onClick={this.getProducts} onChange={(e)=>this.props.onChangeFunction(e)}>
                    <option>Choose product</option>
                    {this.state.products.map((item) => {
                        return <option value = {item._id}>{item.name}</option>
                    })}
                </select>
        );
    }
}

export default SelectItems