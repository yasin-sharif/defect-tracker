import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

	// it is executed when the component is mounted
  useEffect(() => {
   axios.get("http://localhost:4000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [addFlag, setAddFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    setSuccess("")
    if (name === "" || designation === "") {
      setMessage("Please enter the values");
    } else {
      setMessage("");
      setAddFlag(false);
      let newEmployee = { name: name, designation: designation };
      axios.post("http://localhost:4000/employees", newEmployee).then((res) => {
        setEmployees([...employees, res.data]);
        setSuccess(`New Employee has been added with the id ${res.data.id} `)
      });
      setName("");
      setDesignation("");
    }
  };
  const deleteEmployee = (empId) => {
    setSuccess("")
    let employeeId = parseInt(empId);
    axios
      .delete("http://localhost:4000/employees/" + employeeId)
      .then((res) => {
        axios.get("http://localhost:4000/employees").then((res) => {
          setEmployees(res.data);
        });
      });
  };
  return (
    <>
      <table style={{ width: "60%" }} className="table table-bordered">
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>
                    <button onClick={() => deleteEmployee(employee.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </tbody>
      </table>
      <button onClick={() => setAddFlag(!addFlag)} className="btn btn-primary">
        Add Employee
      </button>
      <br />
      <br />
      <div className="text-success">{success}</div>
      {addFlag ? (
        <form>
          EmpName:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setMessage("");
            }}
          />
          <br />
          <br />
          Designation:{" "}
          <input
            type="text"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
              setMessage("");
            }}
          />
          <br />
          <br />
          <button onClick={addEmployee} className="btn btn-primary">
            Add
          </button>
          <div className="text-danger">{message}</div>
        </form>
      ) : null}
    </>
  );
};
export default Employees;
