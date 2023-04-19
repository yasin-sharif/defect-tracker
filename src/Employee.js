/**
 * functional component
 * Child component, map
 */

import 'bootstrap/dist/css/bootstrap.min.css';

const Employee=(props)=>{
    return <>
        <table className='table'>
            <thead className='thead'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {
                props.initial.map(x => {
                    return (<tr>
                        <td>{x.empid}</td>
                        <td>{x.empName}</td>
                        </tr>);
                })
                }
            </tbody>
        </table>
    </>
}

export default Employee;