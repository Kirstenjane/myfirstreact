/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import httpclient from "../commons/httpclient";

const getHello = () => {
    return httpclient.get('/hello');
    
}

export default {getHello}
