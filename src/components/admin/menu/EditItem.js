import React, { useState } from 'react'
import { MdClose, MdThumbDown, MdThumbUp } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../recoil'
import { updateMenuItem, deleteMenuItem } from '../../../apollo/mutations'
import { useMutation } from '@apollo/client';
import { itemsQuery } from '../../../apollo/queries';
import { toast } from 'react-toastify';

const EditItem = ({ item }) => {

    const setModal = useSetRecoilState(modalState)
        
    const [ title, setTitle ] = useState(item.title.en)
    const [ localeTitle, setLocaleTitle ] = useState(item.title.sp)
    const [ price, setPrice ] = useState(parseInt(item.price))
    const [ description, setDescription ] = useState(item.description.en)
    const [ localeDescription, setLocaleDescription ] = useState(item.description.sp)

    const updateItemFailed = () => {
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

      const updateItemSuccess = () => {
        toast("Menu Item Updated", {
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

      const deleteItemFailed = () => {
        toast('Error Deleting Menu Item', {
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

      const deleteItemSuccess = () => {
        toast("Menu Item Deleted", {
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


    const [ menuItemUpdate ] = useMutation(updateMenuItem, { 
        variables: { set: { title: {en: title, sp: localeTitle }, price: price, description: {en: description, sp: localeDescription }, parent: item.parent }},
        refetchQueries: [ { query: itemsQuery }, 'GetItems']
        }
      )

      const [ menuItemDelete ] = useMutation(deleteMenuItem, { 
        variables: { query: { _id: item._id }},
        refetchQueries: [ { query: itemsQuery }, 'GetItems']
        }
      )

    const updateItem = async () => {
        if(title.length === 0 || price.length === 0){
            updateItemFailed()
        }
        else{
            const res = await menuItemUpdate()
            if(res){
                updateItemSuccess()
                setModal({open: false, content: null})
            }  
            else{
                updateItemFailed()
            }
        } 
    }

    const deleteItem = async () => {
        const res = await menuItemDelete()
        if(res){
            deleteItemSuccess()
            setModal({open: false, content: null})
        }  
        else{
            deleteItemFailed()
        }
    }

    return(
        <>
            <div className="flex flex-col h-full w-full p-4 overflow-y-auto">
                <div className="flex flex-row items-center">
                    <span className="headers text-4xl text-red-600 leading-none -mb-1">
                        Edit Item
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
                <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button
                        className="bg-red-600 rounded-sm hover:bg-red-700 p-2 text-neutral-100 text-2xl headers"
                        onClick={() => deleteItem()}
                    >
                        Delete Item
                    </button>
                    <button
                        className="bg-green-600 rounded-sm hover:bg-green-700 p-2 text-neutral-100 text-2xl headers"
                        onClick={() => updateItem()}
                    >
                        Update Item
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditItem