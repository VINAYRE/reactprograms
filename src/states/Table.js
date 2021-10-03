import React, { Component } from 'react'
 class Table extends Component {
     state={name:"realme Narzo 30 (Racing Silver, 128 GB)  (6 GB RAM)",
              image:"https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/u/w/b/narzo-30-rmx2156-realme-original-imag45ymfpry9ecq.jpeg?q=70",
            price:15499,
        QTY:1,
       Totalprice:15499};
       incrQTY=()=>{
           this.setState({QTY:this.state.QTY+1})
       }
       DecQty=()=>{ 
           if(this.state.QTY!=0)
        this.setState({QTY:this.state.QTY-1})}
    render() {
        return (
            <>
               <h1>{this.state.name}</h1> <div className="container">
    <div className="row">
        <div className="col ">
            <div className="card">
                
                    <table className='table table-primary'>
                        <thead>
                            <tr>
                                <th>product-Name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>QTY</th>
                                <th>Totalprice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>{this.state.name}</td>
                            <td ><img src={this.state.image} /></td>
                            <td>{this.state.price}</td>
                            <td><i onClick={this.incrQTY} className="fas fa-plus-circle"></i>
                            {this.state.QTY}
                            <i onClick={this.DecQty} className="fas fa-minus-circle"></i>
                            </td>
                            <td>{this.state.Totalprice*this.state.QTY }</td>
                        </tbody>

                    </table>
            </div>
        </div>
    </div>
</div>
            </>
        )
    }
}

export default Table
