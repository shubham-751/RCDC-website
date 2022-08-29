import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from '../images/1.jpg';
import Img from '../images/2.jpg';

const Projects = () => {

    useEffect(() => {
        
    }, []);

    return (
        /*<div class="card" style={{
        width:'25rem',
          }} >
  <img src={Image} class="card-img-top " alt="2" />
  <div class="card-body">
    <p class="card-text">
        DIGITAL COMMUNICATION DIRECTOR
        <h1> Shubham Shyamdas pal</h1>
    </p>
  </div>
</div>*/
<Container class="container text-center">
  <div class="row row-cols-2">
    <div class="col"><div class="card" style={{
        width:'25rem',
          }} >
  <img src={Image} class="card-img-top rounded " alt="1" />
  <div class="card-body bg-secondary rounded">
    <p class="card-text">
        DIGITAL COMMUNICATION DIRECTOR
        <h1> Shubham Shyamdas pal</h1>
    </p>
  </div>
</div></div>
    <div class="col"><div class="card" style={{
        width:'25rem',
          }} >
  <img src={Img} class="card-img-top rounded " alt="2" />
  <div class="card-body">
    <p class="card-text">
        DIGITAL COMMUNICATION DIRECTOR
        <h1> Parth Phansalkar</h1>
    </p>
  </div>
</div></div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</Container>
    );
}
 
export default Projects;