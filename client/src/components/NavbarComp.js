import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Img from '../images/logo.png';
const NavbarComp = () => {
    return (
        // <div classNameName="navbar">
        //     <div classNameName="navelement title">Rotract</div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/">Home</Link></div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/projects">Projects</Link></div>
        //     <div classNameName="navelement"><Link classNameName="btn" to="/contactus">Contact Us</Link></div>
        // </div>
        <Navbar className="border-bottom border-white" bg="dark" expand="lg">
            <Container>
                {/* <img src={Img}  alt='pic'></img> */}
                <Navbar.Brand><img className="logo" src={Img}  alt='pic'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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