import React from 'react'
import { modalState } from '../../../recoil'
import { useRecoilValue} from 'recoil'

const Modal = () => {

    const modal= useRecoilValue(modalState)

    return(
        <div className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all bg-neutral-900/80 z-50 ${modal?.open ? 'h-full w-full' : 'h-0 w-0'}`}>
            <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all max-h-[600px] max-w-[800px] bg-neutral-100 text-neutral-900 rounded-md shadow-lg ${modal?.open ? 'h-[calc(100vh-20px)] w-[calc(100vw-20px)]' : 'h-0 w-0'}`}>
                <div className={`relative h-full w-full ${modal?.open ? 'block' : 'hidden'}`}>
                    {modal?.content}   
                </div>
            </div>
        </div>
    )
}

export default Modal