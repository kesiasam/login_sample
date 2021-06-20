import React from "react";
import './App.css';
import {useHistory} from "react-router-dom";
import {useState} from "react";

function Login(){
    let history=useHistory();
    const [email,setEmail]=useState("");
    return(
        <div className="top">
        <div className="login">
           <h2>LOGIN FORM</h2>
           <label>EMAIL</label><br/>
           <input type="email" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
           <label>PASSWORD</label><br/>
           <input type="password" /><br/><br/>
           <button onClick={() =>
           history.push({
               pathname: "/welcome",
               state: { email }
           })}>Login</button>
        </div>
        </div>
    );}

export default Login;