import React from "react";
import Img from  '../images/rcdc.png';
import {Row,Card} from "react-bootstrap";

const Home = () => {
    return (
       
        <div className="home">
		
        <center> 
        <h1>HOME</h1>
        </center>
        <Row>
        <center>
        <img src= {Img} class="img-fluid,rounded" alt="pic" />
        </center>
        </Row>
        
        <Row>
      <Card class="text-center my-5 py-4 bg-secondary text-white " >
        <Card.Body>
        <h1>About US</h1>
        </Card.Body>
      </Card>
      </Row>
      <p>
        <center>
It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed,
this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.
Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker
will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.
        </center>
        </p>
        <footer class="py-5 my-5 bg-black">
        <container className="px-4">
            <p class="text-center text-white">
Copyright &copy; RCDC Website 2022
            </p>
        </container>
        </footer>
        
        </div>
        
    );
}

export default Home;