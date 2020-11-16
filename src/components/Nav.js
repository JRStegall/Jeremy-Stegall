import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate(){
    return (
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Navbar.Brand href="#home">Jeremy Stegall</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href = "mailto:jeremy.stegall77@gmail.com?subject = Feedback&body = Message">Contact</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/jeremy-stegall-6a0a90b3/" target="_blank">LinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/JRStegall" target="_blank">Github</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigate;