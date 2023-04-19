/**
 * functional component
 * use state, 
 */
import { useState } from "react";
import React from "react";

function Name(){
    const [name,update]=useState("yasin");
    /**
     * whenever calling the update function directly with an event handler
     * infinite loop of re rendering happens beacuse during
     * initial rendering the update() is called and re-render happens
     * this tends to continue over and over again.
     * To stop this we can use a callback function to resolve the error
     * Having the update() as a callback function resolves error
     */

    /**
     * When the update() is directly used in the component body same
     * case as the above happens.
     * This can be overcome by the use of useEffect hook.
     * E.g.,
        useEffect(()=>{
		update("Yash");
    	}, [])

     * resolves error.
     */
    return <React.Fragment>
        <h2>{name}</h2>
        <button onClick={()=>update("yash")}>update name</button>
    </React.Fragment>
}

export default Name;