import React from 'react'
import { hours } from '../../data/hours'

const Footer = () => {
    
    return(
        <div className="z-10 flex flex-col md:flex-row bg-gradient-to-b from-zinc-900/0 to-zinc-900 via-zinc-900/90 p-8 mt-8 w-full max-w-screen-xxl mx-auto">
            <div className="flex flex-col md:w-1/2">
                <h2 className="headers text-4xl mb-4">Hours</h2>
                <ul className="flex flex-col mb-8 md:my-auto">
                    {hours ?
                        hours.map((day, i) => {
                            return(
                                <li 
                                    key={i}
                                    className="flex flex-row items-center"
                                >
                                    <span className="headers text-red-600 text-2xl md:text-3xl">
                                        {day.day}
                                    </span>
                                    <span className="text-xl md:text-2xl ml-2">
                                        {day.open} - {day.closed}
                                    </span>
                                </li>
                            )
                        })
                    : null }
                </ul>
            </div>
            <div className="flex flex-col md:w-1/2">
                <h2 className="headers text-4xl mb-4">Location</h2>
                <iframe
                    className="h-[300px] w-full" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8353176375854!2d-105.3435548846706!3d20.75746790235929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842140946c943487%3A0xb427b622cdd4112e!2sJax%20Bar%20%26%20Grill!5e0!3m2!1sen!2sca!4v1606345792933!5m2!1sen!2sca" 
                    frameBorder="0"  
                    allowFullScreen
                    aria-hidden="false" 
                    tabIndex="0"
                />
            </div>
        </div>
    )
}

export default Footer