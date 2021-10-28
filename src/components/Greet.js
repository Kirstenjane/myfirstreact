/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function Greet(props){
    return (
            <div>
                <h1> Hello {props.name} a.k.a. {props.stagename} </h1> {props.children}
    </div>
)

    
}

export default Greet