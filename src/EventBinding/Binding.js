import React, { Component } from 'react'
class Binding extends Component {
    state={salary:10000}
    upDatesal=(Totalsal)=>{
        this.setState({salary:Totalsal})
    }
    render() {
        return (
            <>
            <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                <h4>{this.state.salary} </h4></div>
                    <div className="card-body">
                    <button className='btn btn-success mr-3'onClick={this.upDatesal.bind(this,20000)}>20k</button>
                    <button className='btn btn-primary mr-3' onClick={this.upDatesal.bind(this,40000)}>40k</button>
                    <button className='btn btn-danger mr-3' onClick={this.upDatesal.bind(this,100)}>100RS</button>
                    </div>
               
            </div>
        </div>
    </div>
</div>
             
            
            </>
        )
    }
}

export default Binding
