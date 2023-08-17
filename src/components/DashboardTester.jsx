import React, { useEffect } from "react";

import {signOut} from '../features/loginSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import '../stylesheets/common.css';
import '../stylesheets/banner.css';
import '../stylesheets/tableFields.css';


const DashboardTester=()=>{
    useEffect(()=>{
        axios.get("http://localhost:4005/defect").then((result)=>setData(result.data)).catch(error=>console.log(error));
    },[]);

    const [defectData,setData]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function signOutTrigger(){
        dispatch(signOut());
        navigate("/");
    }

    function deleteData(defectId){
        axios.delete("http://localhost:4005/defect/"+defectId)
        .then ((result)=>(
            axios.get("http://localhost:4005/defect")
            .then((res)=>setData(res.data))
            .catch((err)=>{
                window.alert("Data fetching error.");
                console.log(err);
            })
        ))
        .catch (error=>{
            console.log(error);
            window.alert(error);
        })
    }
    return <>
    <div className="banner_extend">
        <div className="center train-box">
            <a className="link" onClick={()=>signOutTrigger()}>Logout</a>
            <a href="/adddefect" className="link queue">Add Defect</a>
        </div>
    </div>

    {/* TODO: set filter functionality */}
    {/* <div className="outer-box border-1px">
        <h2 className="center">Filter Details</h2>

        <div className="center">
            <b>Priority</b> 
            <select className="">
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
            </select>
            <b className="queue">Category</b> 
            <select className="">
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
            </select>
        </div>
    </div> */}

    <h2 className="center">Defect Details</h2>
    <p className="center red-text">Search Result: {defectData? defectData.length:0}</p>
    <table className="">
        <thead>
            <tr>
                <th>Defect Category</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {defectData!=null?
                defectData.map((x)=>{
                    return <tr key={x.id}>
                        <td>{x.category}</td>
                        <td>{x.description.toString()}</td>
                        <td>{x.priority}</td>
                        <td>{x.status=="open"?<i title="Pending" class="fa-regular fa-face-frown fa-xl"></i>:
                            x.status=="close"?<i title="Solved" class="fa-regular fa-face-smile fa-xl"></i>:
                            <i title="Resolving" class="fa-regular fa-hourglass-half fa-xl"></i>}</td>
                        <td>
                            <a className="link" onClick={()=>deleteData(x.id)}><i title="Delete" class="fa-solid fa-trash fa-xl"></i></a>
                        </td>
                    </tr>    
                }):console.log()
            }
        </tbody>
    </table>
</> 
}

export default DashboardTester;