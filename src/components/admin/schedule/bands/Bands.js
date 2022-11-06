import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../../recoil'
import { MdClose, MdOutlineAddCircleOutline } from 'react-icons/md'
import AddBand from './AddBand'
import EditBand from './EditBand'

const Bands = () => {

    const setModal = useSetRecoilState(modalState)

    const [ editor, setEditor ] = useState({open: false, content: null})

    return(
        <>
        <div className="flex flex-col h-full w-full p-4">
            <div className="flex flex-row items-center">
                <span className="headers text-4xl text-red-600 leading-none -mb-1">
                    Manage Bands
                </span>
                <button 
                    className="flex flex-row items-center mx-auto rounded-sm hover:text-red-600 transition-colors"
                    onClick={() => setEditor({open: true, content: <AddBand onClick={() => setEditor({ open: false, content: null })} />})}
                >
                    <MdOutlineAddCircleOutline className="text-3xl" />
                    <span className="text-xl font-medium ml-2">Add New Band</span>
                </button>
                <button
                    onClick={() => setModal({ open: false, content: null })}
                    className="text-red-600 hover:text-red-700 hover:scale-105 transition-all text-3xl ml-auto mr-2"
                >
                    <MdClose />
                </button>
            </div>
            <div className="flex flex-col">
                
            </div>
        </div>
        {editor.open ?
            <div className="absolute top-0 left-0 flex flex-col h-full w-full p-4 z-50 bg-neutral-100">
                {editor.content}
            </div>
        : null }
        </>
    )
}

export default Bands