import React, { useState } from 'react'
import { MdClose, MdThumbDown, MdThumbUp } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../recoil'
import { toast } from 'react-toastify';
import { insertCategory } from '../../../apollo/mutations'
import { useMutation } from '@apollo/client';
import { categoriesQuery } from '../../../apollo/queries';

const AddCategory = () => {

    const setModal = useSetRecoilState(modalState)
        
    const [ title, setTitle ] = useState('')
    const [ localeTitle, setLocaleTitle ] = useState('')

    const addCategoryFailed = () => {
        toast(`${title.length === 0 ? 'Title Field Required' : 'Error Adding Category'}`, {
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

      const addCategorySuccess = () => {
        toast("Category Added", {
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

      const [ categoryInsert ] = useMutation(insertCategory, {
        variables: { data: { title: { en: title, sp: localeTitle } }},
        refetchQueries: [ { query: categoriesQuery }, 'GetCategories']
    })

      const addCategory = async () => {
        if(title.length === 0){
            addCategoryFailed()
        }
        else{
            const res = await categoryInsert()
            if(res){
                addCategorySuccess()
                setModal({open: false, content: null})
            }  
            else{
                addCategoryFailed()
            }
        } 
      }

    return(
        <>
            <div className="flex flex-col h-full w-full p-4">
                <div className="flex flex-row items-center">
                    <span className="headers text-4xl text-red-600 leading-none -mb-1">
                        Add Category
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
                        <span className="headers text-2xl text-red-600 mb-2">
                            Title
                        </span>
                        <label 
                            htmlFor="englishTitle"
                            className="headers text-xl mb-1"
                        >
                            English
                        </label>
                        <input 
                            name="Category Title - English"
                            id="englishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add Category Title (English)"
                        />
                                                <label 
                            htmlFor="spanishTitle"
                            className="headers text-xl mt-2 mb-1"
                        >
                            Spanish
                        </label>
                        <input 
                            name="Category Title - Spanish"
                            id="spanishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={localeTitle}
                            onChange={(e) => setLocaleTitle(e.target.value)}
                            placeholder="Add Category Title (Spanish)"
                        />
                    </div>
                </div>
                <button
                    className="mt-auto bg-red-600 rounded-sm hover:bg-green-600 p-2 text-neutral-100 text-2xl headers"
                    onClick={() => addCategory()}
                >
                    Add Category
                </button>
            </div>
        </>
    )
}

export default AddCategory