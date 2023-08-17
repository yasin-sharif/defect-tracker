import {useEffect, useRef,useState} from 'react';
import { useAsyncError, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';

import '../stylesheets/formFields.css';
import {signIn} from '../features/loginSlice';

function Login(){
    const nameRef=useRef();
    const passwordRef=useRef();
    const [fail,setFail]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogin=(e)=>{
        e.preventDefault();
        setFail("");
        if(nameRef.current.value=="" || passwordRef.current.value==""){
            setFail("Enter all the fields");
        }
        else{
            setFail("");
            axios.get("http://localhost:4000/users",
            {
                params:{
                    "username":nameRef.current.value
                }
            })
            .then((response)=>{
                if(response.data[0]!=null){
                    let result=response.data[0];
                    if(result["password"]==passwordRef.current.value){
                        let id=result["id"], username=result["username"], role=result["role"];
                        dispatch(signIn({id,username,role}));
                        navigate("/dashboard");
                    }
                    else{
                        console.log("Password mismatch failure");
                    }
                }
                else{
                    console.log("Null respose failure");
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    return <React.Fragment>
        <div className="box center">
            <div className="login-box-banner">Firewall</div>
                
            <p className="error-message">{fail}</p>
            
            <form>
                <label htmlFor="username">Username</label><br/>
                <input type="text" name="username" id="username" required placeholder="Enter username" ref={nameRef}/> <br/>
        
                <label htmlFor="password">Password</label><br/>
                <input type="password" name="password" id="password" required placeholder="Enter password" ref={passwordRef}/><br/>
        
                <button id="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>
    </React.Fragment>
    
}

export default Login;