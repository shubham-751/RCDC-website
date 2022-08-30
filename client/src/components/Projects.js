import React, { useEffect, useState } from "react";



const Projects = () => {
    

    const [pLst, setpLst] = useState([]);

    useEffect(() =>{
        getlst();
    }, []);

    const getlst = async () => {
        let data = await fetch('http://localhost:5000/projects/projlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await data.json();
        console.log(data);
        setpLst(data);
        console.log(pLst);
    }

    
    
    return (
        <div className="projects" >
            {
                // pLst.map((item, index) =>
                //     <div className="postContent" key={item._id}>
                //         PROJECT NUMBER : {index+1}
                //         <br />
                //         PROJECT TITLE : {item.title}
                //         <br />
                //         PROJECT DESCRIPTION : {item.desc}
                //         <br />
                //         IMAGE PATH : {item.images} 
                //     </div>
                // )
                pLst.map((item, index) =>
                <div className="card" key={item._id}>
                    <img src={`..../server/uploads/${item.images}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div> 
                )
            }
        </div>
        
    );
}
 
export default Projects;