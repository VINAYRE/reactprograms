import React, { Component } from 'react'
class Digitalwatch extends Component {
    constructor(a){
        super(a);
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        },1000)
    }
    render() {
        return (
            <>
            <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-header"> 
                <h1>current time</h1></div>
                    <div className="card-body">
                    <h2>{this.state.currentTime}</h2>
                    </div>
               
            </div>
        </div>
    </div>
</div>
                
            </>
        )
    }
}

export default Digitalwatch
