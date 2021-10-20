import React, { Component } from 'react'
class State extends Component {
    state={message:"Welcome to "}
    gmHandler=()=>{
        this.setState({message:"Good Mornig"})
    }
    gaHandler=()=>{
        this.setState({message:"Good Afternoon"})
    }
    gnHandler=()=>{
        this.setState({message:"Good Night"})
    }
    render() {
        return (
            <>
                
                <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                <h2>{this.state.message}</h2>
                </div>
                    <div className="card-body">
                        <button className="btn btn-primary mr-3" onClick={this.gmHandler}>GM</button>
                        <button className="btn btn-success mr-3" onClick={this.gaHandler}>GA</button>
                        <button className="btn btn-danger mr-3" onClick={this.gnHandler}>GN</button>
                    </div>
                
            </div>
        </div>
    </div>
</div>
            </>
        )
    }
}

export default State
