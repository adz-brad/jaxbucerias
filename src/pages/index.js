import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import JaxBgVideo from '../assets/videos/jaxHeroVideo.mp4'
import { StaticImage } from "gatsby-plugin-image"
import { bands, events } from "../data/events"

const Home = () => {

  const hash = typeof window !== 'undefined' ? window.location.hash : null

  useEffect(() => {
    if(hash === '#menu' ){
      navigate("/menu/", { replace: true })
    }
  }, [ hash ])

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

let today = new Date()

const getDay = (date) => {
  let day = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  return day
}

const bandsToday = bands.filter(band => band.day === days[today.getDay()])
const eventsToday = events.filter(event => event.day === days[today.getDay()])

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
                Jax Bar & Grill in Bucerias, Nayarit, Mexico is your home for the best live music in Banderas Bay. With bands on the stage every day of the week, the party never stops at Jax, your #1 destination for entertainment and nightlife in Riviera Nayarit. So whether you want to rock out, dance like noone is watching or show off your smarts at our weekly Trivia night, there's something for everyone. Feeling hungry? Our menu is full fantastic snacks, appetizers and delicious meals to satisfy your cravings. And when it's time to wash it all down, the drinks are <b>ALWAYS</b> cold.
              </p>
              <p className="my-2 text-xl font-bold uppercase text-center">
                When the sun goes down, the party is just getting started at Jax!
              </p>
            </div>
          <div className="flex flex-col">
            <div className="my-8">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Live On Stage Today 
                <span className="text text-xl text-neutral-100 uppercase font-bold">
                    {getDay(today)}
                </span>
            </h2>
            <ul className="grid grid-cols-1 gap-2 my-4">
                {bandsToday.length > 0 ?
                    bandsToday.map((band, i) => {
                        return(
                            <li key={i} className="flex flex-col sm:flex-row rounded-md shadow-md">
                                <img 
                                    src={band.image} 
                                    loading="lazy"
                                    alt={`${band.title} live on stage at Jax every ${band.day} at ${band.time}`} 
                                    className="sm:max-h-[200px]"
                                />
                                <div className="flex flex-col py-4 px-2 sm:px-4">
                                    <h3 className="headers text-red-600 text-3xl">
                                        {band.title}
                                    </h3>
                                    <h4 className="uppercase">
                                        {band.day}s at <strong>{band.time}</strong>
                                    </h4>
                                    <span className="my-4 sm:my-auto">
                                        {band.title} hit the Jax Stage every {band.day} at <strong>{band.time}</strong>. Doors open at 4:00 PM - Come on down and rock out with one of the best bands in Bucerias!
                                    </span>
                                </div>
                            </li>
                        )
                    })
                : <>No Bands Scheduled</> }
            </ul>
            <Link
              to="bands"
              className="headers text-2xl flex flex-col items-center w-full max-w-screen-sm mx-auto px-2 py-3 hover:bg-neutral-100 hover:text-neutral-900 bg-red-600 text-neutral-100 transition-colors mt-8 mb-4"
            >
              See Band Schedule
            </Link>
            </div>
            <div className="my-8">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Today's Events
                <span className="text text-xl text-neutral-100 uppercase font-bold">
                    {getDay(today)}
                </span>
            </h2>
            <ul className="grid grid-cols-1 gap-2 my-4">
                {eventsToday.length > 0 ?
                    eventsToday.map((event, i) => {
                        return(
                            <li key={i} className="flex flex-col sm:flex-row rounded-md shadow-md">
                                <img 
                                    src={event.image} 
                                    loading="lazy"
                                    alt={`${event.title} live on stage at Jax every ${event.day} at ${event.time}`} 
                                    className="sm:max-h-[200px]"
                                />
                                <div className="flex flex-col py-4 px-2 sm:px-4">
                                    <h3 className="headers text-red-600 text-3xl">
                                        {event.title}
                                    </h3>
                                    <h4 className="uppercase">
                                        {event.day}. at <strong>{event.time}</strong>
                                    </h4>
                                    <span className="my-4 sm:my-auto">
                                        {event.description}. Doors open at 4:00 PM.
                                    </span>
                                </div>
                            </li>
                        )
                    })
                : <>No Events Scheduled</> }
            </ul>
            <Link
              to="events"
              className="headers text-2xl flex flex-col items-center w-full max-w-screen-sm mx-auto px-2 py-3 hover:bg-neutral-100 hover:text-neutral-900 bg-red-600 text-neutral-100 transition-colors mt-8 mb-4"
            >
              See Event Schedule
            </Link>
            </div>
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
      <meta name="description" content="Jax Bar & Grill in Bucerias, Nayarit, Mexico is home to the best live music in Banderas Bay. With bands on the stage every day of the week, the party never stops at Jax, your #1 destination for entertainment and nightlife in Riviera Nayarit." />
      <meta name="keywords" content="Jax, Bucerias, Nayarit, Nightlife, Live Music, Live Bands, Trivia, Events, Party, Bar, Entertainment, Centro" />
    </>
  )
}
