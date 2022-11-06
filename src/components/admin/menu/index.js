import React from 'react'
import Categories from './Categories'
import Subcategories from './Subcategories'
import Items from './Items'

const MenuEditor = () => {

    return (
        <div className="flex flex-row h-full">
            <Categories />
            <div className="w-4/5 pl-2">
                <Subcategories />
                <Items /> 
            </div>
        </div>
    )
}

export default MenuEditor