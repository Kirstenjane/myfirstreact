/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import axios from "axios";

export default axios.create({
        baseURL: 'https://anuma-myfirstreact.herokuapp.com/SpringJava',
        headers:{
            'Content-Type': 'application/json'
        }     
})
            
            

