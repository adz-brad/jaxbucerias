import React from 'react'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../../recoil'
import { MdClose } from 'react-icons/md'

const AddEvent = () => {

    const setModal = useSetRecoilState(modalState)

    return(
        <div className="flex flex-col h-full w-full p-4">
            <div className="flex flex-row items-center">
                <span className="headers text-4xl text-red-600 leading-none -mb-1">
                    Add Event
                </span>
                <button
                    onClick={() => setModal({ open: false, content: null })}
                    className="text-red-600 hover:text-red-700 hover:scale-105 transition-all text-3xl ml-auto mr-2"
                >
                    <MdClose />
                </button>
            </div>
        </div>
    )
}

export default AddEvent