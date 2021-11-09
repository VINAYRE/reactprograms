import React, { Component } from 'react'
class Add extends Component {
    render() {
        return (
            <>
                <form>
                    <label>Name</label>
                    <input type="text"/><br/>
                    <label>username</label>
                    <input type="text"/><br/>
                    <label>password</label>
                    <input type="text"/><br/>
                    <label>conformpassword</label>
                    <input type="text" onChange={this.passwordchenge}/><br/>
                   {/*  <button>submit</button> */}
                   <input type='submit' value='submit'/>
                </form>
            </>
        )
    }
}

export default Add
