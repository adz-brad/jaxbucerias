import React from 'react'
import { MdFastfood, MdMusicNote, MdEvent, MdOutlineArticle, MdAlternateEmail, MdHome } from 'react-icons/md'

export const menuLinks = [
    {
        "title": "Home",
        "icon": <MdHome className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/"
    },
    {
        "title": "Menu",
        "icon": <MdFastfood className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/menu/"
    },
    {
        "title": "Bands",
        "icon": <MdMusicNote className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/bands/"
    },
    {
        "title": "Events",
        "icon": <MdEvent className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/events/"
    },
    {
        "title": "News",
        "icon": <MdOutlineArticle className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/news/"
    },
    {
        "title": "Contact",
        "icon": <MdAlternateEmail className="text-red-600 mr-4 text-3xl xl:hidden" />,
        "link": "/contact/"
    }
]