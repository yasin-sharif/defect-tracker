import React from "react";
import axios from 'axios';

class DefectChild extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         defectData:this.props.defectData
    //     }
    // }

    render(){
        return <>
            <h2 className="center">Defect Details</h2>
            <p className="center red-text">Search Result: {this.props.defectData? this.props.defectData.length:0}</p>
            <table className="">
                <thead>
                    <tr>
                        <th>Defect Category</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.defectData!=null?
                        this.props.defectData.map((x)=>{
                            return <tr>
                                <td>{x.category}</td>
                                <td>{x.description.toString()}</td>
                                <td>{x.priority}</td>
                                <td>{x.status}</td>
                                {x.status=="open"? <td><a href="*" className="link">Close Defect</a></td>
                                :<td><p className="link-absent">No actions needed</p></td>}
                            </tr>    
                        }):console.log("empty")
                    }
                </tbody>
            </table>
        </>
    }
}

export default DefectChild;