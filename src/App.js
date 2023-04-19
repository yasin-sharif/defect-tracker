/**
 * Main application component
 * functional component
 */

import React from "react";
import './index.css';

function App(){
    return <React.Fragment>
        

        <div className="banner_content">
            <p className="center title_major">Defect Tracker</p>
            <div className="banner_image"></div>
        </div>
        
        <div className="banner_extend">
            <div className="center"><a className="link middle" href="*">Logout</a></div>
            <div className="center"><a href="*" className="link">Add Defect</a>
            <a className="link queue" href="*">View defects</a></div>
        </div>
        
        <div className="outer-box border-1px">
            <h2 className="center">Filter Details</h2>

            <div className="center">
                <b >Priority</b> 
                <select className="queue">
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select>
                <br/><br/>
                <b >Category</b> 
                <select className="queue">
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select>
            </div>
        </div>

        <div className="outer-box">
            {/* <h2 className="center">Defect Details</h2> */}

            {/* <p className="center red-text">Search Result: 3</p> */}
            
            {/* <table className="table">
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
                    <tr>
                        <td>UI</td>
                        <td>Submit Button coming to the extreme left. Refer the screenshots</td>
                        <td>2</td>
                        <td>open</td>
                        <td><a href="*" className="link">Close Defect</a></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    </React.Fragment>
}
export default App;