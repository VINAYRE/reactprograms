import React from "react";

import Bootstrap from "./states/Bootstrap";
import Table from "./states/Table"; 


import One from './props/One';
import Event from './EventHandler/Event'
import Binding from "./EventBinding/Binding";
import Form from "./formHandler/Form";
import Digitalwatch from "./Lifecycle/Digitalwatch";
class App extends React.Component{
    render(){
    return(
        <>
       
        <hr/><hr/>
        <Bootstrap/>
        <hr/><hr/>
        <Table/> 


        <marquee bgcolor='yellow' >PROPS</marquee> 
        <One/>
        <hr/><hr/>
         <marquee bgcolor="blue" textcolor="white">welcome to EventHandler</marquee> 
        <hr/><hr/>
        <Event/>
        <hr/><hr/>
        <marquee bgcolor='red' >welcome to EventBinding</marquee> 
        <Binding/> 
        <marquee bgcolor='green' >formHandler</marquee> 
        <Form/>
        <hr/><hr/>
        <Digitalwatch/>
        </>
    )
}
}
export default App;