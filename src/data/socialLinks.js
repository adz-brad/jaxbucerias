import React from 'react'
import { FaFacebook, FaTripadvisor, FaInstagram } from 'react-icons/fa'

export const socialLinks = [
    {
        "title": "Facebook",
        "icon": <FaFacebook className="text-4xl filter drop-shadow-md mx-1 hover:text-green-500 transition-colors" />,
        "link": "https://www.facebook.com/JaxBucerias"
    },
    {
        "title": "Instagram",
        "icon": <FaInstagram className="text-4xl filter drop-shadow-md mx-1 hover:text-green-500 transition-colors" />,
        "link": "https://www.instagram.com/jax.bucerias/"
    },
    {
        "title": "Trip Advisor",
        "icon": <FaTripadvisor className="text-5xl filter drop-shadow-md mx-1 hover:text-green-500 transition-colors"/>,
        "link": "https://www.tripadvisor.ca/Restaurant_Review-g657267-d8816381-Reviews-Jax_Bar_Grill-Bucerias_Pacific_Coast.html"
    },
]