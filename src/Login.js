import {useEffect, useRef,useState} from 'react';
import axios from 'axios';

function Login(){

    let defectData;
    // const [defectdata,setDefectData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/data")
            .then((res)=>defectData=res.data)
            .catch((error)=>console.log(error))
    })

    const categoryRef=useRef();
    const descriptionRef=useRef();
    const priorityRef=useRef();

    const [fail,setFail]=useState("");
    const [success,setSuccess]=useState("");

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
            axios.post("http://localhost:4000/data",newDefect)
                .then((res)=>{
                    defectData=res.data;
                    console.log(defectData);
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
    
    return <form>
        <label htmlFor="category">Category</label><br/>
        <input type="text" name="category" id="category" ref={categoryRef} required/> <br/>

        <label htmlFor="description">Description</label><br/>
        <textarea name="description" id="description" rows="6" cols="40" ref={descriptionRef} required></textarea><br/>

        <label htmlFor="priority">Priority</label><br/>
        <input type="number" name="priority" id="priority" min="1" max="10" ref={priorityRef} required/><br/>

        {/* <label htmlFor="status">Status</label><br/>
        <input type="radio" name="status" id="status" radioGroup="statusGroup" value="Open" ref={statusRef} required/> Open
        <input type="radio" name="status" id="status" radioGroup="statusGroup" value="Closed" ref={statusRef} required/> Closed<br/> */}

        <input type="submit" onClick={handleOnSubmit}/>

        <p className="error-message">{fail}</p>
        <p className="success-message">{success}</p>
    </form>
}

// class Login extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"",password:""
//         }
//         this.nameRef=React.createRef();
//         this.passwordRef=React.createRef();

//     }

//     // don't need when ref is used
//     // setLoginstate=(event)=>{
//     //     const field=event.target.name;
//     //     const value=event.target.value;
//     //     console.log(field,value);
//     //     this.setState({[field]:value});
//     // }

//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         if(this.nameRef.current.value==="admin" && this.passwordRef.current.value==="admin"){
//             alert("Login Successfull");
//         }
//         else{
//             alert("Login Failed");
//         }
//     }
//     render(){
//         return <form>
//             <label for="username">Username</label><br/>
//             <input type="text" id="username" placeholder="Enter username" name="name" required ref={this.nameRef}/><br/>
//             <label for="password">Password</label><br/>
//             <input type="password" id="password" placeholder="Enter password" name="password" required ref={this.passwordRef}/><br/>
//             <input type="submit" onClick={this.handleOnSubmit}/>
//         </form>
//     }
// }

export default Login;