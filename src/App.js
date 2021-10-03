import React from "react";
import Message from "./states/Message"
import Bootstrap from "./states/Bootstrap";
import Table from "./states/Table";
class App extends React.Component{
    render(){
    return(
        <>
        <Message/> 
        <hr/><hr/>
        <Bootstrap/>
        <hr/><hr/>
        <Table/>
        </>
    )
}
}
export default App;