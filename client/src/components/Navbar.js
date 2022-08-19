import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navelement">Rotract</div>
            <Link className="navelement" to="/">Home</Link>
            <Link className="navelement" to="/projects">Projects</Link>
            <Link className="navelement" to="/contactus">Contact Us</Link>
        </div>
    );
}
 
export default Navbar;