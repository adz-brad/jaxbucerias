import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { StaticImage } from 'gatsby-plugin-image'
import { window, document } from 'browser-monads'

const Page = ({ children }) => {

    let location = window.location.pathname

    useEffect(() => {
        document.getElementById('pageWrapper').scrollTo(0,0)
    }, [ location ])

    let admin;

    if(location === '/admin/'){
        admin = true
    }
    
    return(
        <main className="pageLayout">
            <div className="bgImageWrapper">
                <StaticImage   
                    src="../../assets/images/bg.png" 
                    alt="Jax Bucerias Skeleton Marquee - Page Background" 
                    loading="lazy" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-10px)] max-w-screen-lg"
                />
            </div>
            <div id="pageWrapper" className="z-10 bg-zinc-900/90">
                <div className="max-w-screen-xxl mx-auto">
                    {children}
                </div>
                {admin ? null : <Footer />}
            </div>
        </main>
    )
}

const Layout = ({ children }) => {

    let admin;

    if(window.location.pathname === '/admin/'){
        admin = true
    }

    return(
        <>
            {admin ? null : <Navbar /> }
            <Page>
                {children}
            </Page>
        </>
    )
}

export default Layout