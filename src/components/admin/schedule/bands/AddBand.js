import React, { useState } from 'react'
import { MdClose, MdThumbDown, MdThumbUp } from 'react-icons/md'
import { toast } from 'react-toastify'
import { insertBand } from '../../../../apollo/mutations'
import { bandsQuery } from '../../../../apollo/queries'
import { useMutation } from '@apollo/client'

const AddBand = ({ onClick }) => {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ url, setUrl ] = useState("");

    const [ image, setImage ] = useState(false);

    const preview = image ? URL.createObjectURL(image) : null

    const uploadImage = async () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", process.env.GATSBY_CLOUDINARY_PRESET)
        data.append("cloud_name", process.env.GATSBY_CLOUDINARY_CLOUD)
        data.append('folder', 'Jax Bucerias')
        fetch(`https://api.cloudinary.com/v1_1/${process.env.GATSBY_CLOUDINARY_CLOUD}/image/upload`, 
        {
            method:"post",
            body: data
        })
        .then(resp => { return resp.json() })
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => { return err })
    }

    const addBandFailed = () => {
        toast(`${title.length === 0 ? 'Title Field Required' : 'Error Adding Band'}`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            className: "custom-toast red-toast",
            icon: <MdThumbDown className="text-xl" />
          });
      };

      const addBandSuccess = () => {
        toast("Band Added", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            className: "custom-toast green-toast",
            icon: <MdThumbUp/>
          });
      };

      const [ bandInsert ] = useMutation(insertBand, {
        variables: { data: { title: title, image: url, description: description }},
        refetchQueries: [ { query: bandsQuery }, 'GetBands']
      })

      const addBand = async () => {
        if(title.length === 0){
            addBandFailed()
        }
        else{
            if(image){
                const imageRes = await uploadImage()
                console.log(imageRes)
            }
            //const res = await bandInsert()
            //if(res){
            //    addBandSuccess()
            //    onClick()
            //}  
            //else{
            //    addBandFailed()
            //}
        } 
      }

    return(
        <div className="flex flex-col h-full w-full overflow-y-auto">
            <div className="flex flex-row items-center">
                <span className="headers text-4xl text-red-600 leading-none -mb-1">
                    Add Band
                </span>
                <button
                    onClick={() => onClick()}
                    className="text-red-600 hover:text-red-700 hover:scale-105 transition-all text-3xl ml-auto mr-2"
                >
                    <MdClose />
                </button>
            </div>
            <div className="my-auto px-4">
                <div className="flex flex-col my-4">
                    <label 
                        htmlFor="title"
                        className="headers text-xl mb-1"
                    >
                        Name
                    </label>
                    <input 
                        name="Title"
                        id="Title"
                        type="text" 
                        className="p-2 rounded-sm hover:shadow-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Add Band Name"
                    />
                </div>       
                <div className="flex flex-col my-4">
                    <label 
                        htmlFor="Description"
                        className="headers text-xl mb-1"
                    >
                        Description
                    </label>
                    <textarea 
                        name="Description"
                        id="Description"
                        rows="4"
                        className="p-2 rounded-sm hover:shadow-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add Band Description"
                    />
                </div>  
                <div className="flex flex-row my-4">
                    <span className="headers text-xl mb-1">
                        Image
                    </span>
                    <div className="flex flex-row items-center">
                    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}/>
                    </div>
                    <div>
                    <h1>Uploaded image will be displayed here</h1>
                    <img src={preview}/>
                    </div>
                </div>                 
            </div>
            <button
                className="mt-auto bg-red-600 rounded-sm hover:bg-green-600 p-2 text-neutral-100 text-2xl headers"
                onClick={() => addBand()}
            >
                Add Band
            </button>
        </div>
    )
}

export default AddBand