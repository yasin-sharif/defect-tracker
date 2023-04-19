import React from "react";

class Resultant extends React.Component{
    // handle=()=>{
    //     this.props.func(10);
    // }
    render(){
        return <>
            <h1>{this.props.message}</h1>
            {/* <button onClick={this.handle}>Reset</button> */}
        </>
    }
}

export default Resultant;