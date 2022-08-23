import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from './logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navelement title">Rotract</div>
            <center>
            <img src= {Image} alt="pic" /> 
            </center>
           
            <div className="navelement">
                <DropdownButton id="dropdown-basic-button" title="Information">
                        <div className="dropdownelement"><Link className="btn" to="/">Home</Link></div>
                        <div className="dropdownelement"><Link className="btn" to="/projects">Projects</Link></div>
                        <div className="dropdownelement"><Link className="btn" to="/contactus">Contact Us</Link></div>
                </DropdownButton>

            </div>
        </div>
    );
}
 
export default Navbar;