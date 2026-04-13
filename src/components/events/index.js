import React from 'react'
import { events } from '../../data/events'

const FACEBOOK_URL = "https://www.facebook.com/JaxBucerias"

const FacebookScheduleNotice = () => (
    <div className="my-8 p-6 border-2 border-neutral-600 rounded-lg max-w-3xl">
        <p className="text-lg sm:text-xl mb-4">
            During the summer and low season we do not list events on this site. <strong>Check Facebook for the schedule</strong>—trivia, parties, and one-offs are posted there first.
        </p>
        <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="headers text-xl inline-block px-4 py-3 hover:bg-neutral-100 hover:text-neutral-900 bg-red-600 text-neutral-100 transition-colors rounded-sm"
        >
            Jax on Facebook
        </a>
    </div>
)

const EventsDisplay = () => {

    if (!events?.length) {
        return (
            <div className="flex flex-col">
                <h1 className="headers text-6xl">
                    Events
                </h1>
                <FacebookScheduleNotice />
            </div>
        )
    }

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
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const getDay = (date) => {
        let day = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        return day
    }

    const scheduledToday = events.filter(event => event.day === days[today.getDay()])
    const scheduledTomorrow = events.filter(event => event.day === days[tomorrow.getDay()])
    const scheduledRest = events.filter(event => event.day !== days[today.getDay()] && event.day !== days[tomorrow.getDay()])

    const getRange = (date) => {
        let d1 = new Date(date)
        d1.setDate(d1.getDate() + 1)
        let d2 = new Date(date)
        d2.setDate(d2.getDate() + 5)
        return `${getDay(d1)} - ${getDay(d2)}`
    }

    return(
        <div className="flex flex-col">
            <h1 className="headers text-6xl">
                Events
            </h1>
            <div className="bg-zinc-900/70">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Today at Jax 
                <span className="text text-xl text-neutral-100 uppercase font-bold">
                    {getDay(today)}
                </span>
            </h2>
            <ul className="grid grid-cols-1 gap-2 my-4">
                {scheduledToday.length > 0 ?
                    scheduledToday.map((event, i) => {
                        return(
                            <li key={i} className="flex flex-col sm:flex-row bg-zinc-900/70 rounded-md shadow-md">
                                <img 
                                    src={event.image} 
                                    alt={`${event.title} live on stage at Jax every ${event.day} at ${event.time}`} 
                                    className="sm:max-h-[200px]"
                                />
                                <div className="flex flex-col py-4 px-2 sm:px-4">
                                    <h3 className="headers text-3xl">
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
                : <li className="p-4 text-lg">Check Facebook for the schedule.</li> }
            </ul>
            </div>
            <div className="bg-zinc-900/70">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Tommorow At Jax 
                <span className="text text-xl text-neutral-100 uppercase font-bold">
                    {getDay(tomorrow)}
                </span>
            </h2>
            <ul className="grid grid-cols-1 gap-2 my-4">
                {scheduledTomorrow.length > 0 ?
                    scheduledTomorrow.map((event, i) => {
                        return(
                            <li key={i} className="flex flex-col sm:flex-row bg-zinc-900/70 rounded-md shadow-md">
                                <img 
                                    src={event.image} 
                                    alt={`${event.title} live on stage at Jax every ${event.day} at ${event.time}`} 
                                    className="sm:max-h-[200px]"
                                />
                                <div className="flex flex-col py-4 px-2 sm:px-4">
                                    <h3 className="headers text-3xl">
                                        {event.title}
                                    </h3>
                                    <h4 className="uppercase">
                                        {event.day} at <strong>{event.time}</strong>
                                    </h4>
                                    <span className="my-4 sm:my-auto">
                                        {event.description}. Doors open at 4:00 PM.
                                    </span>
                                </div>
                            </li>
                        )
                    })
                : <li className="p-4 text-lg">Check Facebook for the schedule.</li> }
            </ul>
            </div>
            <div className="bg-zinc-900/70">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Coming Up
                <span className="text text-xl text-neutral-100 uppercase font-bold">
                    {getRange(tomorrow)}
                </span>
            </h2>
            <ul className="grid grid-cols-1 gap-2 my-4">
                {scheduledRest.length > 0 ?
                    scheduledRest.map((event, i) => {
                        return(
                            <li key={i} className="flex flex-col sm:flex-row bg-zinc-900/70 rounded-md shadow-md">
                                <img 
                                    src={event.image} 
                                    alt={`${event.title} live on stage at Jax every ${event.day} at ${event.time}`} 
                                    className="sm:max-h-[200px]"
                                />
                                <div className="flex flex-col py-4 px-2 sm:px-4">
                                    <h3 className="headers text-3xl">
                                        {event.title}
                                    </h3>
                                    <h4 className="uppercase">
                                        {event.day}s at <strong>{event.time}</strong>
                                    </h4>
                                    <span className="my-4 sm:my-auto">
                                        {event.description}. Doors open at 4:00 PM.
                                    </span>
                                </div>
                            </li>
                        )
                    })
                : <li className="p-4 text-lg">Check Facebook for the schedule.</li> }
            </ul>
            </div>
        </div>
        
    )
}

export default EventsDisplay
