import React, { useState } from 'react'
import { MdClose, MdThumbDown, MdThumbUp } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../recoil'
import { toast } from 'react-toastify';
import { insertMenuItem } from '../../../apollo/mutations'
import { useMutation } from '@apollo/client';
import { itemsQuery } from '../../../apollo/queries';

const AddItem = ({ parent, order }) => {

    const setModal = useSetRecoilState(modalState)
        
    const [ title, setTitle ] = useState('')
    const [ localeTitle, setLocaleTitle ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ localeDescription, setLocaleDescription ] = useState('')

    const addItemFailed = () => {
        toast(`${title.length === 0 ? 'Title Field Required' : price.length === 0 ? 'Price Field Required' : 'Error Adding Menu Item'}`, {
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

      const addItemSuccess = () => {
        toast("Menu Item Added", {
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

      const [ insertItem ] = useMutation(insertMenuItem, { 
        variables: { data: { title: {en: title, sp: localeTitle }, price: price, description: {en: description, sp: localeDescription }, parent: parent, order: order + 1 }},
        refetchQueries: [ { query: itemsQuery }, 'GetItems']
        }
      )

      const addItem = async () => {
        if(title.length === 0 || price.length === 0){
            addItemFailed()
        }
        else{
            const res = await insertItem()
            if(res){
                addItemSuccess()
                setModal({open: false, content: null})
            }  
        } 
      }

    return(
        <>
            <div className="flex flex-col h-full w-full p-4 overflow-y-auto">
                <div className="flex flex-row items-center">
                    <span className="headers text-4xl text-red-600 leading-none -mb-1">
                        Add Item
                    </span>
                    <button
                        onClick={() => setModal({ open: false, content: null })}
                        className="text-red-600 hover:text-red-700 hover:scale-105 transition-all text-3xl ml-auto mr-2"
                    >
                        <MdClose />
                    </button>
                </div>
                <div className="my-auto px-4">
                    <div className="flex flex-col my-4">
                        <span className="headers text-2xl mb-2 text-red-600">
                            Title
                        </span>
                        <label 
                            htmlFor="englishTitle"
                            className="headers text-xl mb-1"
                        >
                            English
                        </label>
                        <input 
                            name="Title (English)"
                            id="englishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add Menu Item Title (English)"
                        />
                                            <label 
                            htmlFor="spanishTitle"
                            className="headers text-xl mt-2 mb-1"
                        >
                            Spanish
                        </label>
                        <input 
                            name="Title (Spanish)"
                            id="spanishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={localeTitle}
                            onChange={(e) => setLocaleTitle(e.target.value)}
                            placeholder="Add Menu Item Title (Spanish)"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label 
                            htmlFor="itemPrice"
                            className="headers text-2xl mb-2 text-red-600"
                        >
                            Price
                        </label>
                        <input 
                            name="Item Price"
                            id="itemPrice"
                            type="number" 
                            min="0"
                            step="1"
                            className="p-2 rounded-sm hover:shadow-md"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Add Menu Item Price"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                    <span className="headers text-2xl mb-2 text-red-600">
                    Description
                        </span>
                        <label 
                            htmlFor="englishDescription"
                            className="headers text-xl mb-1"
                        >
                            English
                        </label>
                        <textarea 
                            name="Item Description (English)"
                            id="englishDescription"
                            type="text" 
                            rows="3"
                            className="p-2 rounded-sm hover:shadow-md"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add Menu Item Description (English)"
                        />
                                                <label 
                            htmlFor="spanishDescription"
                            className="headers text-xl mt-2 mb-1"
                        >
                            Spanish
                        </label>
                        <textarea 
                            name="Item Description (Spanish)"
                            id="spanishDescription"
                            type="text" 
                            rows="3"
                            className="p-2 rounded-sm hover:shadow-md"
                            value={localeDescription}
                            onChange={(e) => setLocaleDescription(e.target.value)}
                            placeholder="Add Menu Item Description (Spanish)"
                        />
                    </div>
                </div>
                <button
                    className="mt-auto bg-red-600 rounded-sm hover:bg-green-600 p-2 text-neutral-100 text-2xl headers"
                    onClick={() => addItem()}
                >
                    Add Item
                </button>
            </div>
        </>
    )
}

export default AddItem