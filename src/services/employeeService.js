/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import httpclient from "../commons/httpclient";

const getEmployees
        = () => {
    return httpclient.get('/employees');
    
}

const postEmployee = (data) =>{
    return httpclient.post('/employees', data)

}
const getEmployee
    = (employeeId) => {
    return httpclient.get(`/employees/${employeeId}`);
}

const putEmployee = (data) =>{
    return httpclient.post('/employees', data)

}


const deleteEmployee = (employeeId) =>{
    return httpclient.delete(`/employees/${employeeId}`)
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}

