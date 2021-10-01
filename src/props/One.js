import React, { Component } from 'react'
import Two from './Two';
class One extends Component {
    product_Name="honer 9N";
    price=15000;
    color=['red','blue','black','white'];


    render() {
        return (
            <>
               <Two name={this.product_Name}
                    cost={this.price}
                     color={this.color}/>  
            </>
        )
    }
}

export default One
