import React, { useState } from "react";

const UploadWidget = () => {

    const cloud = 'de6ty8wwf'
    const preset = 'r37geryj'

    const [image, setImage ] = useState(false);
    const [ url, setUrl ] = useState("");

    const preview = image ? URL.createObjectURL(image) : null

    const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", preset)
    data.append("cloud_name", cloud)
    data.append('folder', 'Jax Bucerias')
    data.append('format', 'webp')
    fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, 
    {
        method:"post",
        body: data
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    setUrl(data.url)
    })
    .catch(err => console.log(err))
    }

    return(
    <div>
        <div>
        <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload</button>
        </div>
        <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={preview}/>
        </div>
    </div>
    )
}

export default UploadWidget;