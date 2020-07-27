import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Introduction.jsx';
function Header() {
    return ( 
        <header>
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><h1 className='logo'>Sync.</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><h2 className='nav-item'>Fellowship</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className='nav-item'>Partners</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className='nav-item'>Apply</h2></Nav.Link>
        
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

      </header>
      
       
    )
}








export default Header