import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { menuLinks } from '../../data/menuLinks'
import { socialLinks } from '../../data/socialLinks'

const Navbar = () => {

    const [ mobileNav, setMobileNav ] = useState(false)

    const mobileNavOpen = 'left-0'
    const mobileNavClosed = '-translate-x-full xl:-translate-x-0'

    return(
        <nav className="navbar">
            <div className="relative flex flex-row items-center w-full max-w-screen-xxl mx-auto h-full z-40">
                <Link
                    to="/"
                    className="relative z-20 ml-4 xxl:ml-0 h-[calc(100%-5px)] py-4 flex flex-row items-center select-none"
                    onClick={() => setMobileNav(false)}
                >
                    <StaticImage
                        src="../../assets/images/logo.png"
                        alt="Jax Bucerias, Riviera Nayarit - Home of the Best Live Music In The Bay - Logo"
                        className="w-[80px] md:w-[110px] my-auto"
                        loading="eager"
                    />
                    <div className="flex flex-col ml-4">
                        <span className="headers text-3xl md:text-5xl leading-none sm:leading-none md:leading-none mt-4 filter drop-shadow-md">
                            JAX Bucerias
                        </span>
                        <span className="flex flex-row sm:leading-none md:leading-none md:ml-1 uppercase font-bold text-red-600 leading-none tracking-tight">
                            Eat Drink Play. 
                            <strong className="hidden md:block">
                                The Jax Way!
                            </strong> 
                        </span>
                    </div>             
                </Link>

                <button 
                    className="absolute top-1/2 -translate-y-1/2 xl:hidden right-6 h-12 w-12 z-50"
                    onClick={mobileNav ? () => setMobileNav(false) : () => setMobileNav(true)}
                    name="Toggle Navigation"
                >
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                            mobileNav
                            ? "-translate-y-1/2 rotate-45 bg-red-600 w-8"
                            : "-translate-y-3 bg-neutral-100 w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out ${
                            mobileNav ? "scale-0" : "bg-neutral-100 w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out ${
                            mobileNav
                            ? "-translate-y-1/2 -rotate-45 bg-red-600 w-8"
                            : "translate-y-2 bg-neutral-100 w-10 md:w-12"
                        }`}
                    />
                </button>


                <div 
                    className={`z-10 flex flex-col absolute top-[110px] md:top-[130px] bg-zinc-900 w-2/3 max-w-[300px] rounded-r-md shadow-md transition-all h-[calc(100vh-120px)] md:h-[calc(100vh-140px)] ${mobileNav ? mobileNavOpen : mobileNavClosed} xl:relative xl:flex-row xl:grow xl:top-0 xl:h-auto xl:w-auto xl:max-w-none xl:rounded-none xl:shadow-none`}
                >
                    <ul className="flex flex-col xl:flex-row xl:items-center mt-2 mx-auto select-none">
                        { menuLinks ?
                            menuLinks.map((link, i) => {
                                return(
                                    <li 
                                        key={i}
                                        className="text-2xl font-bold uppercase hover:text-red-600 transition-colors duration-100 my-2 xl:mx-3"
                                    >
                                        <Link
                                            to={link.link}
                                            onClick={() => setMobileNav(false)}
                                            className="flex flex-row items-center"
                                        >
                                            {link.icon}
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            })
                        : null }
                    </ul>
                    <ul className="flex flex-row items-center mt-auto mb-4 mx-auto select-none xl:my-auto xl:mr-4 xl:ml-auto">
                        { socialLinks ?
                            socialLinks.map((link, i) => {
                                return(
                                    <li key={i}>
                                        <a 
                                            title={link.title}
                                            href={link.link} 
                                            alt={link.title}
                                            className=""
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {link.icon}
                                        </a>
                                    </li>
                                )
                            })
                        : null }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar