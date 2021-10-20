import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Nav extends Component {
    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link  to="/">React Router</Link>
                <div>

                <ul class="navbar-nav mr-auto">
                    <li>
                    <Link class="nav-link" to="/userlist">Userlist</Link>
                    </li>
                    <li>
                    <Link class="nav-link" to="/state">State</Link>
                    </li>
                    <li>
                    <Link class="nav-link" to="/table">Table</Link>
                    </li>
                </ul>
                   
                    </div>
               </nav> 
               
            </>
        )
    }
}

export default Nav
