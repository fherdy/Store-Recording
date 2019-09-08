import React, { Component } from 'react';
import product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {

    state={
        product:storeProducts
        
    }



    render() {
        console.log(this.state.product)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name ="our" title="products"/>
                    <div className="row">
                        <ProductConsumer value="Hello from context">
                            {value => {
                                return<h1>{value}</h1>;
                            }}
                        </ProductConsumer>



                </div>
                </div>
                </div>
                </React.Fragment>
        )
    }
}
