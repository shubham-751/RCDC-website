import React, { useEffect } from "react";
import { Container} from "react-bootstrap";
import Image from '../images/12.png';
import Img from '../images/22.png';

const Team = () => {

    useEffect(() => {
        
    }, []);

    return (
      
<Container className="container text-center">
<h1> Core Team</h1>
  <img src={Img} class="rounded mx-auto d-block" alt="2"></img>
  
 <hr></hr>
 <h1> BOARD OF DIRECTORS</h1>
 <hr></hr>
  <img src={Image} class="rounded mx-auto d-block" alt="1"></img>
 
  
  <footer  className="py-4 my-7 bg-black">
        <Container className="px-4">
            <p  className="text-center text-white">
Copyright &copy; RCDC Website 2022
            </p>
        </Container>
        </footer>
</Container>

    );
}
 
export default Team;