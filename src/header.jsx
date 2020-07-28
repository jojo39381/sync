import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import sync from './sync.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return ( 
        <header>
        <Navbar expand="lg" className='.d-none .d-sm-block' >
        <Navbar.Brand href="#home"><img src={sync} alt='logo' width='60' height='60' className="d-inline-block align-top"></img> <h1 className='logo'>Sync.</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{visibility:'hidden'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#programs"><h1 className='nav-item'>Fellowship</h1></Nav.Link>
            <Nav.Link href="#partners"><h1 className='nav-item'>Partners</h1></Nav.Link>
            <Nav.Link href="https://josephycyeh.typeform.com/to/Pugk9J8T"><h1 className='nav-item'>Apply</h1></Nav.Link>
        
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

      </header>
      
       






      


    )
}








export default Header