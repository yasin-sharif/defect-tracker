import React from "react";
import axios from "axios";
import Resultant from "./Resultant";

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:0
        };
    }

    componentDidMount(){
        // // console.log("component mounted");
        // axios.get('users.txt')
        //     .then(result=>console.log(result.data))
        //     .catch(error=>console.log(error));

        this.interval=setInterval(this.start,1000);
    }

    start=()=>{
        //this.setState({time:this.state.time+1});
    }

    // handleClick=()=>{
    //     this.interval=setInterval(this.start,1000);
    // }

    // handleClickStop=()=>{
    //     clearInterval(this.interval);
    // }

    // update=(value)=>{
    //     this.setState({time:value});
    // }
 
    render() {
        if(this.state.time==5){
            throw new Error("Time count can't go above 5");
        }
        return <>
            {/* <button onClick={()=>this.handleClick()}>Start</button>
            <button onClick={()=>this.handleClickStop()}>Stop</button> */}
            <Resultant message={this.state.time}/>
        </>
    }
}

export default Timer;