import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { categoriesQuery } from '../../../apollo/queries'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { categoryState, modalState, localeState } from '../../../recoil'
import { MdAddCircleOutline } from 'react-icons/md'
import AddCategory from './AddCategory'

const Categories = () => {

    const [ category, setCategory ] = useRecoilState(categoryState)
    const locale = useRecoilValue(localeState)
    const { data } = null //useQuery(categoriesQuery)

    useEffect(() => {
        if(data){
            setCategory(data.categories[0])
        }
    }, [ data ])


    const setModal = useSetRecoilState(modalState)

    const addCategory = () => {
        setModal({ open: true, content: <AddCategory/> })
    }

        if(data){
            return (
                <ul className="w-1/5 grid grid-cols-1 gap-2">
                    {data.categories.map((cat, i) => {
                        return(
                            <li key={i}>
                                <button 
                                    onClick={() => setCategory(cat)}
                                    className={`flex flex-col w-full h-full items-center justify-center bg-zinc-800/10 hover:bg-zinc-800/50 px-4 py-2 rounded-sm shadow-lg headers text-3xl ${cat.title === category?.title ? 'bg-zinc-700/50' : 'bg-zinc-800/10'}`}
                                >
                                    {locale === 'en' ? cat.title.en : cat.title.sp.length > 0 ? cat.title.sp : cat.title.en}
                                </button>
                            </li>
                        )
                    })}
                    <li>
                        <button
                            className="flex flex-row w-full h-full items-center justify-center bg-zinc-800/10 hover:bg-zinc-800/50 px-4 py-2 rounded-sm shadow-lg text-3xl"
                            onClick={() => addCategory()}
                        >
                            <MdAddCircleOutline />
                            <span className="text-xl uppercase ml-2">
                                Add Category
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

export default Categories