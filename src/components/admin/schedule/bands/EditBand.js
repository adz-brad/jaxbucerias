import React from 'react'
import { MdClose } from 'react-icons/md'

const EditBand = ({ onClick, band }) => {

    return(
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-row items-center">
                <span className="headers text-4xl text-red-600 leading-none -mb-1">
                    Edit Band
                </span>
                <button
                    onClick={() => onClick()}
                    className="text-red-600 hover:text-red-700 hover:scale-105 transition-all text-3xl ml-auto mr-2"
                >
                    <MdClose />
                </button>
            </div>
        </div>
    )
}

export default EditBand