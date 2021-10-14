import React, { Component } from 'react'
import Two from './Two';
 class One extends Component {
     product_Name="i phone 11";
     price=40000;
     color=["red",'black','blue','white']
     image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg";
     
    render() {
        return (
            <>
                <Two product={this.product_Name}
                      cost={this.price}
                       color={this.color}
                       image={this.image}/>
            </>
        )
    }
}

export default One
