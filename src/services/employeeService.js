/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import httpclient from "../commons/httpclient";

const getEmployees
        = () => {
    return httpclient.get('/myfirstreact/employees');
    
}

const postEmployee = (data) =>{
    return httpclient.post('/myfirstreact/employees', data)

}
const getEmployee
    = (employeeId) => {
    return httpclient.get(`/myfirstreact/employees/${employeeId}`);
}

const putEmployee = (data) =>{
    return httpclient.post('/myfirstreact/employees', data)

}


const deleteEmployee = (employeeId) =>{
    return httpclient.delete(`/myfirstreact/employees/${employeeId}`)
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}

