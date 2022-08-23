import React from "react";
import Img from  './rcdc.png';

const Home = () => {
    return (
        <div className="home">
		
        <center> 
        <h1>HOME</h1>
        <img src= {Img} alt="pic" />
        <h1>ABOUT US</h1>
        </center>
        
        </div>
    );
}
 
export default Home;