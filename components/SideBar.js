import React from "react";
import "../src/app/globals.css";



function SideBar(props){
    return (
        <nav id="navBar">
            <button id="btnClose" onClick={props.fun}>X</button>
       </nav> 

    )
}
export default SideBar