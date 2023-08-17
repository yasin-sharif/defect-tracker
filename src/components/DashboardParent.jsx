import React, { useEffect } from 'react';
import { useState } from 'react';

import DashboardTester from './DashboardTester';
import store from '../store/store';
import DashboardCoder from './DashboardCoder';


const DashboardParent=()=>{
   
    const [data,setData]=useState();
    const state=store.getState();

    if (state.rootReducer.logAction[0] == null ) {
        return <>
            <h1>Unauthorised access. Kindly login.</h1>
            <br/>
            <a href="/">Login</a>
        </>
    }
    else if (state.rootReducer.logAction[0].role == 'tester') {
        return <DashboardTester/>
    }
    else {
        return <DashboardCoder/>
    }


}

export default DashboardParent;