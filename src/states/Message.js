import React, { Component } from 'react'
class Message extends Component {
    state={
        name:"vinay reddy"
    }
    upDatename=()=>{
        this.setState({name:"welcome to"})
    }
    render() {
        return (
            <>
               <h1>{this.state.name}</h1>
               <button onClick={this.upDatename}>chenge</button> 
            </>
        )
    }
}

export default Message;
