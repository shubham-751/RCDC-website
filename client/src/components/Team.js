import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from '../images/1.jpg';
import Img from '../images/2.jpg';

const Team = () => {

    useEffect(() => {
        
    }, []);

    return (
        /*<div className="card" style={{
        width:'25rem',
          }} >
  <img src={Image} className="card-img-top " alt="2" />
  <div className="card-body">
    <p className="card-text">
        DIGITAL COMMUNICATION DIRECTOR
        <h1> Shubham Shyamdas pal</h1>
    </p>
  </div>
</div>*/
<Container className="container text-center">
  <div className="row row-cols-2">
    <div className="col"><div className="card" style={{
        width:'25rem',
          }} >
  <img src={Image} className="card-img-top rounded " alt="1" />
  <div className="card-body bg-secondary rounded">
    <p className="card-text">
        DIGITAL COMMUNICATION DIRECTOR
         Shubham Shyamdas pal
    </p>
  </div>
</div></div>
    <div className="col"><div className="card" style={{
        width:'25rem',
          }} >
  <img src={Img} className="card-img-top rounded " alt="2" />
  <div className="card-body">
    <p className="card-text">
        DIGITAL COMMUNICATION DIRECTOR
         Parth Phansalkar
    </p>
  </div>
</div></div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>
</Container>
    );
}
 
export default Team;