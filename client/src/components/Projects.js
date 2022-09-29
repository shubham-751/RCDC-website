import React, { useEffect} from "react";
import {Container,Row} from "react-bootstrap";


const Projects = () => {

    useEffect(() => {
        
    }, []);
    return (
    <div class="container text-center">
    <Row>
    <div class="row">
    <div class="col">
      
    {/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."> 
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
    </Row>
    <hr></hr>
    <Row>
    <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
    </Row>
  

    
    <footer  className="py-4 my-7 bg-black">
        <Container className="px-4">
            <p  className="text-center text-white">
Copyright &copy; RCDC Website 2022
            </p>
        </Container>
        </footer>
  </div>
    
            
    
       
        
    );
}
 
export default Projects;