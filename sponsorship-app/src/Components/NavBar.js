import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">    Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <NavDropdown title="Data" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/sponsordata">Sponsor</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/matchdata">Match Details</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/datapage">Payment Data</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/addpayment">Form|Payment</Nav.Link>
          <Nav.Link as={Link} to="/deletepayment">Delete|Payment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
