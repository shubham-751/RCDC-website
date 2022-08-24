import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavbarComp = () => {
    return (
        // <div classNameName="navbar">
        //     <div classNameName="navelement title">Rotract</div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/">Home</Link></div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/projects">Projects</Link></div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/contactus">Contact Us</Link></div>
        // </div>
        <Navbar className="border border-secondary" bg="light" expand="lg">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contactus" className="nav-link">Contact Us</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavbarComp;