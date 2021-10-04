import React, { Component } from 'react'
class Event extends Component {
    state={name:"vinay reddy"}
    gmHandler=()=>{
        this.setState({name:"Hello Good Morning"})
    }
    gaHandler=()=>{ this.setState({name:"Hello Good Afternoon"})}
    gnHandler=()=>{ this.setState({name:"Hello Good Night"})}
    render() {
        return (
            <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-header' >
                            <h2 >{this.state.name}</h2>
                            </div>
                            <div className='card-body'>
                            <button className='btn btn-primary mr-2'onMouseEnter={this.gmHandler}>GM</button>
                            <button className='btn btn-danger mr-2'onMouseEnter={this.gaHandler}>GA</button>
                            <button className='btn btn-success mr-2'onMouseEnter={this.gnHandler}>GN</button>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default Event
