import React from "react";
import Sidebar from "./Sidebar";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import HighlightIcon from "@material-ui/icons/Highlight";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH,faBell,faUserCircle  } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className="tophead container-fluid" style={{height: "90px"}}>
    <button className="btn btn-dark" id="menu-toggle" onClick={CustomStyle1} ><FontAwesomeIcon icon={faSlidersH } /></button>
    <Navbar light  expand="lg">
    <Navbar.Brand className="navbar-brand" href="#home">work flow</Navbar.Brand> 
    <Navbar.Toggle id="menu-toggle1"  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="navicon" href="#home"><i><FontAwesomeIcon icon={ faBell } /></i><p>notifications</p></Nav.Link>
      <Nav.Link className="navicon" href="#link"><i><FontAwesomeIcon icon={ faUserCircle } /></i><p>profile</p></Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Header;
