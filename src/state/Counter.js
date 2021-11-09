import React, { Component } from 'react'
class Counter extends Component {
    state={Qty:5}
    incrementHandler=()=>{
        this.setState({
            Qty:this.state.Qty+1
        })
    }
    decrementHandler=()=>{ 
        if(this.state.Qty!=0)
        this.setState({ Qty:this.state.Qty-1
    })}
    
    render() {
        return (
            <div>
               
               <button type="button" className="btn btn-primary" onClick={this.incrementHandler}>INC</button>
                <span><h1>product Qty: {this.state.Qty}</h1></span>
                <button type="button" className="btn btn-dark"  onClick={ this.decrementHandler}>Dec</button>

            </div>
        )
    }
}

export default Counter
