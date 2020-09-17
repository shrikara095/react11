import React from "react";
import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer"

function Footer() {
  return(
    <div id="contents">
      <Sidebar />
      <Maincontainer />
    </div>

  )

}

export default Footer;
// const year = new Date().getFullYear();
// return (
//   <footer>
//     <p>Copyright ⓒ {year}</p>
//   </footer>
// );