import {useEffect, useRef,useState} from 'react';
import React from 'react';
import axios from 'axios';


import '../stylesheets/addDefect.css';
import { useNavigate } from 'react-router-dom';
import {signOut} from '../features/loginSlice';
import { useDispatch } from "react-redux";

import '../stylesheets/formFields.css';


const AddDefect=()=>{
    // let defectData;
    // // const [defectdata,setDefectData]=useState([]);
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/data")
    //         .then((res)=>defectData=res.data)
    //         .catch((error)=>console.log(error))
    // })

    const categoryRef=useRef();
    const descriptionRef=useRef();
    const priorityRef=useRef();

    const [fail,setFail]=useState("");
    const [success,setSuccess]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    

    function signOutTrigger(){
        
        dispatch(signOut());
        
        navigate("/");
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(categoryRef.current.value && descriptionRef.current.value && priorityRef.current.value){
            let newDefect={
                "category":categoryRef.current.value,
                "description":descriptionRef.current.value,
                "priority":parseInt(priorityRef.current.value),
                "status":"open"
            };
            console.log("new defect data is",newDefect);
            axios.post("http://localhost:4005/defect",newDefect)
                .then((res)=>{
                    setFail("");
                    setSuccess("New defect added");
                    categoryRef.current.value="";
                    descriptionRef.current.value="";
                    priorityRef.current.value="";
                })
                .catch((error)=>{
                    console.log(error.response.data);
                    setFail("Unable to add defect");
                    setSuccess("");
                });
        }
        else{
            setFail("Fill all the fields");
        }
        
    }
    
    return <React.Fragment>
        <div className="center train-box">
            <a className="link" onClick={()=>signOutTrigger()}>Logout</a>
            <a href="/dashboard" className="link queue">View Defect</a>
        </div>
        <form>
            <p className="error-message">{fail}</p>
            <p className="success-message">{success}</p>

            <label htmlFor="category">Category</label><br/>
            <input type="text" name="category" id="category" ref={categoryRef} required/> <br/>

            <label htmlFor="description">Description</label><br/>
            <textarea name="description" id="description" rows="6" cols="40" ref={descriptionRef} required></textarea><br/>

            <label htmlFor="priority">Priority</label><br/>
            <input type="number" name="priority" id="priority" min="1" max="10" ref={priorityRef} required/><br/>

            <button id="submit" onClick={handleOnSubmit}>Submit</button>
        </form>
    </React.Fragment>
}

export default AddDefect;