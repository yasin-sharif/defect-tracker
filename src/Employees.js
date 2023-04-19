/**
 * functional component
 * parent component
 */

import { useState } from "react";
import Employee from "./Employee";

const Employees=()=>{
    const [entries,update]=useState([
        {empid:1,empName:"Yasin"},
        {empid:2,empName:"Sharif"},
        {empid:3,empName:"Yash"},
    ]);

    return <Employee initial={entries}/>
}

export default Employees;