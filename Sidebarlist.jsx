import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faEye,faPlayCircle,faSignOutAlt  } from '@fortawesome/free-solid-svg-icons'
function Sidebarlist(){
    return(
        <div className="ab">
        {/* <li><img className="icon-workflow" src="images/pp.jpg" alt="icon"></img></li> */}
        <li><a href="#"><span><i className="fontaws"><FontAwesomeIcon icon={ faPlusCircle }/> </i></span><span>create workflow</span></a></li>
        <li><a href="#"><span><i className="fontaws"><FontAwesomeIcon icon={ faEye }/> </i></span><span>view workflow</span></a></li>
        <li><a href="#"><span><i className="fontaws"><FontAwesomeIcon icon={faPlayCircle }/> </i></span><span>initiate workflows</span></a></li>
        <li><a href="#"><span><i className="fontaws"><FontAwesomeIcon icon={faSignOutAlt }/> </i></span><span>logout</span></a></li>
        </div>
    )
}
export default Sidebarlist;