import React, { useEffect } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { categoryState, subcategoryState, modalState, localeState } from '../../../recoil'
import { useQuery } from '@apollo/client'
import { subcategoriesQuery } from '../../../apollo/queries'
import { MdAddCircleOutline } from 'react-icons/md'
import AddSubcategory from './AddSubcategory'

const Subcategories = () => {

    const category = useRecoilValue(categoryState)
    const [ subcategory, setSubcategory ] = useRecoilState(subcategoryState)
    const locale = useRecoilValue(localeState)
    const { data } = useQuery(subcategoriesQuery, { variables: { parent: category?._id }})

    useEffect(() => {
        if(data){
            setSubcategory(data.subcategories[0])
        }
        else{
            setSubcategory(null)
        }
    }, [ data ])

    const setModal = useSetRecoilState(modalState)

    const addSubcategory = () => {
        setModal({ open: true, content: <AddSubcategory parents={{categoryId: category?._id, subcategoryId: subcategory?._id }} /> })
    }

    if(data){
        return(
            <ul className="w-full grid grid-rows-1 grid-flow-col gap-2">
                {data.subcategories?.map((subcat, i) => {
                    return (
                        <li key={i}>
                            <button 
                                onClick={() => setSubcategory(subcat)}
                                className={`flex flex-col w-full h-full items-center justify-center hover:bg-zinc-800/50 px-4 py-2 rounded-sm shadow-lg headers text-3xl ${subcat.title === subcategory?.title ? 'bg-zinc-700/50' : 'bg-zinc-800/10'}`}
                            >
                                {locale === 'en' ? subcat.title.en : subcat.title.sp.length > 0 ? subcat.title.sp : subcat.title.en}
                            </button>
                        </li>
                    )
                })}
                <li>
                    <button 
                        onClick={() => addSubcategory()}
                        className="flex flex-row w-full h-full items-center justify-center hover:bg-zinc-800/50 px-4 py-2 rounded-sm shadow-lg text-3xl"
                    >
                        <MdAddCircleOutline />
                        <span className="text-xl uppercase ml-2">
                            Add Subcategory
                        </span>
                    </button>
                </li>
            </ul>
        )
    }
    else {
        return null
    }
}

export default Subcategories