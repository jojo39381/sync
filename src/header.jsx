import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return ( 
        <header>
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><h1 className='logo'>Sync.</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{visibility:'hidden'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#programs"><h2 className='nav-item'>Fellowship</h2></Nav.Link>
            <Nav.Link href="#partners"><h2 className='nav-item'>Partners</h2></Nav.Link>
            <Nav.Link href="https://josephycyeh.typeform.com/to/Pugk9J8T"><h2 className='nav-item'>Apply</h2></Nav.Link>
        
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

      </header>
      
       






      


    )
}








export default Header