import React, { Component } from 'react'
/* import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Nav from './ReactAxios/Nav'
import Userlist from './ReactAxios/Userlist'
import State from './ReactAxios/State'
import Table from './ReactAxios/Table' */
/* import Message from './Redux/Message';
import Navbar from './Navbar';
import {Store} from "./Redux/Message/Store";
import {Provider} from "react-redux"
 */
/* import Add from './interview/Add' */
/* import One from './props/One' */
import State from "./state/State"
import Counter from './state/Counter'
class App extends Component {
    render() {
        return (
            <>
     {/*        <Router>
            <Nav/>
            <Switch>
                <Route path="/userlist" component={Userlist}/>
                <Route path="/state" component={State}/>
                <Route path="/table" component={Table}/>
            </Switch>
            </Router> */}
            {/* <Provider Store={Store}>
        
            <Navbar/>
           <Message/>
    
           </Provider>
                 */}
              {/*  <Add/> */}
            {/*   <One/> */}
           {/*  <State/> */}
            <Counter/>
         
               </>

            
        )
    }
}

export default App
