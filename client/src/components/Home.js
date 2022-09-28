import React from "react";
import Img from  '../images/1.png';
import {Row,Card,Container} from "react-bootstrap";


const Home = () => {
    return (
       
        <div className="home container"  >
		
        
        <Row>
        <center> 
        <h1>HOME</h1>
        </center>
        </Row>
        <Row>

        <center>
        <img src= {Img}  className="img-fluid rounded" alt="pic" />
        </center>
        
      <Card className="my-5 py-4 text-black bg-secondary " >
        <Card.Body  className="text-center">
        <h1>About US</h1>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <h5  className="lead">
      Rotaract Club of Dahisar Coast is our pride and passion. Charted on 5th of March 1989, the club has a long way and in this journey of years it has created some landmarks, set few trends and produced some legends.

​ RCDC, as we fondly call it, the Rotaract club of Dahisar Coast was chartered by Rotary with an intention of creating leaders for tomorrow. Handful of young boys and girls with strong determination and a will to win and grow took the first step of this 32 years long journey.

At RCDC we believe in the team spirit, individuals from various fields coming together and working for a cause, cause which binds us together, makes us who we are and that's why Together We Excel. RCDC is a balanced personality and yes it has proved time & again its love towards the community & the nation as a whole. And will continue its work in a progressive manner.​

A journey, where the club went through trials and tribunals. A journey, which had more difficulties than success. But RCDC walked through that initial fire only to prove its metal and soon became one of the reputed community based clubs in the region.
</h5>
      </Row>

      
        
        <Row>
        <footer  className="py-4 my-7 bg-black">
        <Container className="px-4">
            <p  className="text-center text-white">
Copyright &copy; RCDC Website 2022
            </p>
        </Container>
        </footer>
        </Row>
        
        
        </div>
        
    );
}

export default Home;