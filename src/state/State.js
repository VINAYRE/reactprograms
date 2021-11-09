import React, { Component } from 'react'
class State extends Component {
    state={name:"Wellcome to"};
    chengeValue=()=>{
        this.setState({name:"vinayreddy"})
        
    }
    render() {
        return (
            <>
            <h1>{this.state.name}</h1>
            <button type="button" className="btn btn-primary" onClick={this.chengeValue}>press</button>
            </>
        )
    }
}

export default State
