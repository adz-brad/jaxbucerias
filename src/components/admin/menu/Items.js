import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoryState, subcategoryState, modalState, localeState } from '../../../recoil'
import { useQuery } from '@apollo/client'
import { subcategoriesQuery, itemsQuery } from '../../../apollo/queries'
import Item from './Item'
import { MdAddCircleOutline } from 'react-icons/md'
import EditItem from './EditItem'
import AddItem from './AddItem'

const Items = () => {

    const category = useRecoilValue(categoryState)
    const subcategory = useRecoilValue(subcategoryState)
    const [ subcategories, setSubcategories ] = useState([])
    const locale = useRecoilValue(localeState)
    const { data: subcategoriesData } = useQuery(subcategoriesQuery, { variables: { parent: subcategory?._id }})

    const setModal = useSetRecoilState(modalState)

    const addItem = (parent) => {
        setModal({
            open:true,
            content: <AddItem parent={parent} />
        })
    }

    const editItem = (item) => {
        setModal({
            open:true,
            content: <EditItem item={item} />
        })
    }

    const Items = ({ parent }) => {
        
        const { data: itemsData } = useQuery(itemsQuery, { variables: { parent: parent?._id }})

            return (
                <>
                    {itemsData ?
                        itemsData.items.map((item, i) => {
                            return <Item key={i} item={item} onClick={() => editItem(item)} />
                        })
                    : null }
                    <li>
                        <button
                            className="flex flex-row items-center justify-center h-full w-full bg-zinc-800/50 hover:bg-zinc-800/80 p-4 rounded-md hover:shadow-lg text-3xl"
                            onClick={() => addItem(parent._id)}
                        >
                            <MdAddCircleOutline />
                            <span className="text-xl uppercase ml-2">
                                Add Item
                            </span>
                        </button>
                    </li>
                </>
            )
    }

    useEffect(() => {
        if(subcategoriesData){
            setSubcategories(subcategoriesData.subcategories)
        }
        else{
            setSubcategories([])
        }
    }, [ subcategoriesData ])


    return(
        <div>
            { subcategories.length > 0 ?
                subcategories.map((subcat, i) => {
                    return (
                        <div key={i} className="py-2">
                            <h1 className="headers text-3xl m-4">
                                {locale === 'en' ? subcat.title.en : subcat.title.sp.length > 0 ? subcat.title.sp : subcat.title.en}
                            </h1>
                            <ul className="grid grid-cols-4 gap-2">
                                <Items parent={subcat} />
                            </ul>
                        </div>
                    )
                })
            : 
                category ?
                    <ul className="grid grid-cols-4 gap-2 py-2">
                        <Items parent={category} />
                    </ul>
                : null
            }
        </div>
    )
}

export default Items