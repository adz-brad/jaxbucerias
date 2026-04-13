import React, { useEffect } from "react"
import { navigate } from "gatsby"
import JaxBgVideo from '../assets/videos/jaxHeroVideo.mp4'
import { StaticImage } from "gatsby-plugin-image"

const FACEBOOK_URL = "https://www.facebook.com/JaxBucerias"

const Home = () => {

  const hash = typeof window !== 'undefined' ? window.location.hash : null

  useEffect(() => {
    if(hash === '#menu' ){
      navigate("/menu/", { replace: true })
    }
  }, [ hash ])

  return(

    <div className="py-2">
      <div className="flex flex-col">
        <div className="relative">
        <video 
          repeat="true"
          loop 
          autoPlay 
          muted 
          playsInline 
          className="w-full rounded-t-[20px] shadow-lg"
        >
          <source 
            src={JaxBgVideo} 
            type="video/mp4" 
            alt="Jax Bucerias Nayarit"
          />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center w-full">
        <StaticImage
          src="../assets/images/favicon.png"
          loading="eager"
          className="w-1/2 md:w-auto"
          alt="Jax Bar & Grill - Bucerias, Nayarit, Mexico - Home of the best live music in the bay!"
        />
        <span className="script text-4xl md:text-8xl -translate-y-4 md:-translate-y-8 filter drop-shadow-lg">Bucerias, Nayarit</span>
        <span className="headers filter drop-shadow-lg text-xl md:text-3xl xl:text-5xl -mt-2 md:mt-2">
          Home of the best live music in the bay!
        </span>
        </div>
        </div>
        <div className=" p-4 max-w-screen-xxl mx-auto md:py-8">
            <h1 className="flex flex-col sm:flex-row mt-4 items-center sm:justify-center sm:items-start">
              <span className="headers uppercase text-red-600 text-4xl sm:text-5xl md:text-6xl filter drop-shadow-md">
                Salud Amigos &
              </span>
              <span className="headers uppercase text-4xl sm:text-5xl md:text-6xl filter drop-shadow-md sm:ml-2">
                Welcome to Jax!
              </span>
            </h1>
            <div className="flex flex-col p-2">
              <p className="my-2 text-lg">
                Jax Bar & Grill in Bucerias, Nayarit, Mexico is your home for live music and good times in Banderas Bay. In the summer and low season we run a leaner lineup, so the best place to see who is on stage and what is happening is our Facebook page. Feeling hungry? Our menu is full of fantastic snacks, appetizers and delicious meals to satisfy your cravings. And when it is time to wash it all down, the drinks are <b>ALWAYS</b> cold.
              </p>
              <p className="my-2 text-xl font-bold uppercase text-center">
                When the sun goes down, the party is just getting started at Jax!
              </p>
            </div>
            <div className="my-8 p-6 border-2 border-neutral-600 rounded-lg text-center max-w-3xl mx-auto">
              <h2 className="headers text-3xl sm:text-4xl text-red-600 mb-4">
                Live music and events
              </h2>
              <p className="text-lg sm:text-xl mb-6">
                We do not keep a full band and event calendar on this website during the summer and low season. <strong>Check Facebook for the schedule</strong>—that is where we post who is playing, trivia, specials, and any changes.
              </p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="headers text-2xl inline-flex flex-col items-center w-full max-w-screen-sm mx-auto px-4 py-3 hover:bg-neutral-100 hover:text-neutral-900 bg-red-600 text-neutral-100 transition-colors rounded-sm"
              >
                Open Jax on Facebook
              </a>
            </div>
        </div>
       </div>
    </div>
    
  )
}

export default Home

export const Head = () => {
  return(
    <>
      <title>Jax Bar & Grill - Bucerias, Nayarit - The Best Live Music In The Bay!</title>
      <meta name="description" content="Jax Bar & Grill in Bucerias, Nayarit, Mexico—live music, cold drinks, and great food. Check Facebook for the current band and event schedule in summer and low season." />
      <meta name="keywords" content="Jax, Bucerias, Nayarit, Nightlife, Live Music, Live Bands, Trivia, Events, Party, Bar, Entertainment, Centro" />
    </>
  )
}
