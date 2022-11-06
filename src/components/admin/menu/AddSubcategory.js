import React, { useState } from 'react'
import { MdClose, MdThumbDown, MdThumbUp } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../recoil'
import { toast } from 'react-toastify';
import { insertSubcategory } from '../../../apollo/mutations'
import { useMutation } from '@apollo/client';
import { subcategoriesQuery } from '../../../apollo/queries';

const AddSubcategory = ({ parents }) => {

    const setModal = useSetRecoilState(modalState)
        
    const [ title, setTitle ] = useState('')
    const [ localeTitle, setLocaleTitle ] = useState('')
    const [ parentType, setParentType ] = useState('category')

    const addSubcategoryFailed = () => {
        toast(`${title.length === 0 ? 'Title Field Required' : 'Error Adding Subcategory'}`, {
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

      const addSubcategorySuccess = () => {
        toast("Subcategory Added", {
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

      const [ subcategoryInsert ] = useMutation(insertSubcategory, {
        variables: { data: { title: {en: title, sp: localeTitle }, parent: parentType === 'category' ? parents.categoryId : parents.subcategoryId }},
        refetchQueries: [ { query: subcategoriesQuery }, 'GetSubcategories']
    })

      const addSubcategory = async () => {
        if(title.length === 0){
            addSubcategoryFailed()
        }
        else{
            const res = await subcategoryInsert()
            if(res){
                addSubcategorySuccess()
                setModal({open: false, content: null})
            }  
        } 
      }

    return(
        <>
            <div className="flex flex-col h-full w-full p-4">
                <div className="flex flex-row items-center">
                    <span className="headers text-4xl text-red-600 leading-none -mb-1">
                        Add Subcategory
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
                            name="Subcategory Title (English)"
                            id="englishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add Subcategory Title (English)"
                        />
                        <label 
                            htmlFor="spanishTitle"
                            className="headers text-xl mb-1"
                        >
                            Spanish
                        </label>
                        <input 
                            name="Subcategory Title (Spanish)"
                            id="spanishTitle"
                            type="text" 
                            className="p-2 rounded-sm hover:shadow-md"
                            value={localeTitle}
                            onChange={(e) => setLocaleTitle(e.target.value)}
                            placeholder="Add Subcategory Title (Spanish)"
                        />
                    </div>

                <div>
                    <span className="headers text-xl mb-1">
                        Add To
                    </span>
                    <div className="flex flex-row items-center">
                        <input 
                            type="radio" 
                            id="category"
                            name="category"
                            value="category"
                            checked={parentType === 'category'}
                            onChange={(e) => setParentType(e.target.value)}
                        />
                        <span className="ml-2">Category</span>
                    </div>
                    <div className="flex flex-row items-center"></div>
                        <input 
                            type="radio" 
                            id="subcategory"
                            name="subcategory"
                            value="subcategory"
                            checked={parentType === 'subcategory'}
                            onChange={(e) => setParentType(e.target.value)}
                        />
                        <span className="ml-2">Subcategory</span>
                    </div>
                </div>
                <button
                    className="mt-auto bg-red-600 rounded-sm hover:bg-green-600 p-2 text-neutral-100 text-2xl headers"
                    onClick={() => addSubcategory()}
                >
                    Add Subcategory
                </button>
            </div>
        </>
    )
}

export default AddSubcategory