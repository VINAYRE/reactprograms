import React, { Component } from 'react'
class Two extends Component {
    render(props) {
        return (
            <>
               <h1>Productanme:{this.props.Name}</h1> 
               <h2>Price:{this.props.Cost}</h2> 
               <h3>color:{this.props.color}</h3>
               <h4> Binefits:{this.props. Binefits.offerece}</h4>
               <h5>Binefits:{this.props.Binefits.disc}</h5>
            </>
        )
    }
}

export default Two
