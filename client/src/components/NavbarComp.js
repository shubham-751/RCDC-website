import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import RotractLogo from '../images/logo.png';
const NavbarComp = () => {
    return (
        <Navbar className="border-bottom border-white" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand><img className="logo" src={RotractLogo}  alt='Logo'/></Navbar.Brand>
                <Navbar.Toggle className="text-light rounded-3" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link text-light">Home</Link>
                    <Link to="/projects" className="nav-link text-light">Projects</Link>
                    <Link to="/contactus" className="nav-link text-light">Contact Us</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavbarComp;