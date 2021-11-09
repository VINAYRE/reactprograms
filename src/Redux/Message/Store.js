import {createStore}from "redux"
import{composeWithDevTools}from "redux-devtools-extension"
let Store=createStore({Message:"vinay reddy"},composeWithDevTools)
export{Store}