/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template    
 */
import {useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () =>{
    
    //react hooks usestate
    const[hello, setHello] = useState("down bestie sowyy UWU")
     //react hooks useeffect
    useEffect(() =>{ //anonymous function
        helloServices.getHello() //promise 
                .then(response => {
                   setHello(response.data) 
                })
                .catch(err => {
                    console.log("something went wrong!")
                })
        
    })
    //axios is tool for http request promises
    //promises - asynch processes
    
    return hello;
} 

export default Hello