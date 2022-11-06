import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { StaticImage } from 'gatsby-plugin-image'
import { window } from 'browser-monads'

const Layout = ({ children }) => {

    useEffect(() => {
        document.getElementById('pageWrapper').scrollTo(0,0)
    }, [ window.location ])

    return(
        <div>
            <Navbar /> 
            <div className="pageLayout">
                <div className="bgImageWrapper">
                <StaticImage   
                    src="../../assets/images/bg.png" 
                    alt="Jax Bucerias Skeleton Marquee - Page Background" 
                    loading="lazy" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-10px)] max-w-screen-lg"
                />
                </div>
                <main id="pageWrapper" className="absolute top-0 left-0 h-full w-full overflow-y-auto z-50 bg-zinc-900/80">
                    <div className="max-w-screen-xxl mx-auto">
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Layout