import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand>ResinCalc</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item>
                <Link className="nav-link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                <Link className="nav-link" to="/calculator">Calculator</Link>
                </Nav.Item>
                <Nav.Item>
                <Link className="nav-link" to="/about">About</Link>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;