import {useEffect, useState} from "react";
import employeeService from "../services/employeeService";
import {useNavigate, useParams} from "react-router-dom";

const AddEmployee = () =>{

    const [name, setName] =  useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] =  useState("");
    const navigate = useNavigate();
    const{employeeId} = useParams();



    const saveEmployee = (e) =>{
        e.preventDefault();

        if(employeeId){
            const employee = {employeeId, name, location, department};
            employeeService.putEmployee(employee)
                .then(
                    response =>{
                        console.log("updated employee", response. data)
                        navigate("/employees")
                    }
                )
                .catch(
                    error =>{
                        console.error("something went wrong!")

                    }



                )
        }
        else{
            const employee = {name, location, department};
            employeeService.postEmployee(employee)
                .then(
                    response =>{
                        console.log("added new employee", response. data)
                        navigate("/employees")
                    }
                )
                .catch(
                    error =>{
                        console.error("something went wrong!")

                    }

                )

        }


    }

    useEffect(

        () =>{
            if(employeeId){
                employeeService.getEmployee(employeeId)
                    .then(
                        employee =>{
                            setName(employee.data.name);
                            setLocation(employee.data.location);
                            setDepartment(employee.data.department);
                            console.log(employee.data.name);
                            console.log(employee.data.location);
                            console.log(employee.data.department);



                        }
                    )

                    .catch(
                        error =>{
                            console.error("error!", error)
                        }
                    )
            }

        },[])


    return(
        <div className="container">

            <h1>Add Employee</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        id="name"
                        placeholder="Add Employee name"
                        onChange= {
                    (e) => {
                        setName(e.target.value)
                    }
                }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        id="location"
                        placeholder="Add location"
                    onChange= {
                    (e) => {
                        setLocation(e.target.value)
                    }
                }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        value={department}
                        id="department"
                        placeholder="Add Employee department"
                    onChange= {
                    (e) => {
                        setDepartment(e.target.value)

                    }
                }
                    />
                </div>
                <button type="submit" className="btn btn-primary"  onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>


    )



}

export default AddEmployee