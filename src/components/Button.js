/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import React from "react";

class Button extends React.Component{
    
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    
    addCounter = () => {
        this.setState(
                {
                    count : this.state.count + 1
                }
                )
    }
    
    
    render(){
        return( 
         <div>        
        <button onClick = {this.addCounter}>Click Me!!!!</button>
        <p> counts= {this.state.count}</p>
        </div>
        )
    }
    
}
export default Button
