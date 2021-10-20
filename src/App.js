import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Nav from './ReactAxios/Nav'
import Userlist from './ReactAxios/Userlist'
import State from './ReactAxios/State'
import Table from './ReactAxios/Table'
class App extends Component {
    render() {
        return (
            <>
            <Router>
            <Nav/>
            <Switch>
                <Route path="/userlist" component={Userlist}/>
                <Route path="/state" component={State}/>
                <Route path="/table" component={Table}/>
            </Switch>
            </Router>
           
                
               </>

            
        )
    }
}

export default App
