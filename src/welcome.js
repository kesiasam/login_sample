import React from "react";
import './App.css';
import {useHistory} from "react-router-dom";

function Welcome(props){
    let history=useHistory();
    return(
        <div className="top">
        <div className="welcome">
           <h2>WELCOME</h2>
           <p>You have logged in with the email address as</p>
           <h2 id="log">{props.location.state.email}</h2>
           <button onClick={()=>history.goBack()}>LOGOUT</button>
        </div>
        </div>
    );}

export default Welcome;