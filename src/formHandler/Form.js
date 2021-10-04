import React, { Component } from 'react'
class Form extends Component {
    render() {
        return (
            <>
                <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                
                    <div className="card-body">
                        <form>
                           <div>
                            <label>Email address</label><br/>
                            <input type="text" className='form control' placeholder="Enter email........"/>
                            </div>

                            <div>
                            <label>password</label><br/>
                            <input type="password" placeholder="password........"/>
                            </div>
                            <br/>
                            <div>
                           <button className='btn btn-danger'>Submit</button>
                            </div>
                        </form>
                    </div>
               
            </div>
        </div>
    </div>
</div>
            </>
        )
    }
}

export default Form
