/**Routing Component */

import { BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React from 'react';

import NotFound from "./NotFound";
import Login from './Login';
import DashboardParent from "./DashboardParent";
import AddParent from "./AddParent";

class Navigation extends React.Component{
    render(){
        return <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<DashboardParent/>}/>
                <Route path="/adddefect" element={<AddParent/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    }
}

export default Navigation;