import React, { useState } from "react"
import Sidebarlist from "./Sidebarlist"

    

function Sidebar(){
 
 const var1=function CustomStyle1()
{
    const [customstyle,setCustomStyle]=useState(0);
        if(customstyle==0)
        {
        return(setCustomStyle(1));
        }
        else{
            return (setCustomStyle(0));
        }
        
    
       
};
const style1=
{
    width:"80px"
}
const style2=
{
    width:"250px"
}

  
    return( 

        <div id="sidebar-wrapper" style={var1==0?style1:style2}>
       
            <ul className="sidebar-nav">
               <Sidebarlist />
            </ul>
        </div>
    );

 }
export default Sidebar;
//  export {CustomStyle1};
 
 // var customStyle=
// {
//     width:"80px",
//     writable: true
// }

// function Customstyle1(){
   
//    if(customStyle.width==="80px")
//     {
//     customStyle.width="250px"
//     }
//     else
//     customStyle.width="80px"
   
// }
