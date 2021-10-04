import React, { Component } from 'react'
 class Two extends Component {
    render() {
        return (
            <>
               
               <table className="table table-primary" >
                   <thead >
                       <tr >
                           <th>Product-Name </th>
                           <th>image</th>
                           <th>Price</th>
                           <th>color</th>
                       </tr>
                   </thead>
                   <tbody>
                   <td>{this.props.product}</td>
                   <td><img src={this.props.image} width="40%" /></td>
                   <td>{this.props.cost}</td>  
                   <td>{this.props.color[2]}</td>                 
                   </tbody>


               </table>
            </>
        )
    }
}

export default Two
