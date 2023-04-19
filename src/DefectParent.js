// /**
//  * HAS ERROR
//  */

import React from 'react';
import DefectChild from './DefectChild';
import axios from 'axios';

var self;

class DefectParent extends React.Component{
    constructor(){
        super();
        this.state={
            data:null
        }
        self=this;
        axios.get('defect-data.json')
            .then((result)=>
                self.setState(
                    {data:result.data}
                )
            )
            .catch(error=>console.log(error));
    }
    render(){
        return <DefectChild defectData={this.state.data}/>
    }
}

export default DefectParent;