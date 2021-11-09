import React, { Component } from 'react'
import Two from './Two';
 class One extends Component {
     product_Name="Iphone";
     price=30000;
     Color=['red','white','blue','block','pink']
     binefits={offerece:"Now lot of offereces",disc:"Available now discount"}
    render() {
        return (
            <>
               <Two 
                    Name={this.product_Name}
                    Name={this.product_Name}
                    Cost={this.price}
                    color={this.Color[3]}
                    Binefits={this.binefits}

                    /> 
            </>
        )
    }
}

export default One
