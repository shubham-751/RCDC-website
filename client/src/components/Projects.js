import React, { useEffect, useState } from "react";

const Projects = () => {

    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');
    // const [image, setImage] = useState({ preview: '', data: '' });

    // const handleFileChange = (e) => {
    //     const img = {
    //       preview: URL.createObjectURL(e.target.files[0]),
    //       data: e.target.files[0],
    //     }
    //     setImage(img)
    //   }

    
    // const handleAdd = async (e) => {
    //     e.preventDefault();
    //     let formData = new FormData()
    //     formData.append('image', image.data)

    //     let response = await fetch('http://localhost:5000/projects/single', {
    //         method: 'POST',
    //         body: formData,
    //     });
    //     response = await response.json();
    //     console.log(response);

    //     await fetch('http://localhost:5000/projects/add', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title,
    //             desc,
    //             images: response.filename
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }

    
    return (
        <div className="projects" >
            {/* <form onSubmit={handleAdd}>
                <h1>Title</h1>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                <br /><br />
                <h1>Desc</h1>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc} />
                <br /><br />
                <input type="file" name="image" onChange={handleFileChange}/>
                <button type="submit">Add</button>
            </form> */}
        </div>
        
    );
}
 
export default Projects;