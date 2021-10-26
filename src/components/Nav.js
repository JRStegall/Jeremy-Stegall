import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigate() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand as={Link} eventKey="1" className="link bandName" to="/">
        Jeremy Stegall
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} className="link" to="/proj">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} className="link" to="/edu">
              Education
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="4"
              href="mailto:jeremy.stegall77@gmail.com?subject = Feedback&body = Message"
            >
              Contact
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="5"
              href="https://www.linkedin.com/in/jeremy-stegall-6a0a90b3/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="https://github.com/JRStegall" target="_blank">
              Github
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigate;
