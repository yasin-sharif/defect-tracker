import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import DefectParent from "./DefectParent";
import Login from './Login';

/**
 * new method for rendering in react 18
 */
const container=document.getElementById("root");
const root=ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

// const container2=document.getElementById("another");
// const root2=ReactDOMClient.createRoot(container2);

// root2.render(
//     <React.StrictMode>
//         <Article>
//         </Article>
//     </React.StrictMode>
// )

const container3=document.getElementById("defectDetails");
const root3=ReactDOMClient.createRoot(container3);
root3.render(
    <React.StrictMode>
        <DefectParent/>
    </React.StrictMode>
)

// const container3=document.getElementById("differ");
// const root3=ReactDOMClient.createRoot(container3);

// root3.render(
//     <React.StrictMode>
//         <Name/>
//     </React.StrictMode>
// )

// const container4=document.getElementById("prop_demo");
// const root4=ReactDOMClient.createRoot(container4);

// root4.render(
//     <Employees/>
// )

// const container5=document.getElementById("clock");
// const root5=ReactDOMClient.createRoot(container5);
// root5.render(
//     <ErrorHandler>
//         <Timer />
//     </ErrorHandler>
// )

const formContainer=document.getElementById("formBlock");
const formRoot=ReactDOMClient.createRoot(formContainer);
formRoot.render(
    <React.StrictMode>  
        <Login/>
    </React.StrictMode>
)