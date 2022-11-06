import React from "react"
import EventsDisplay from "../components/events"

const Events = () => {

  return(

    <div className="p-4">
      <EventsDisplay/>
    </div>
    
  )
}

export default Events

export const Head = () => {
  return(
    <>
      <title>Events - Jax Bucerias Nayarit</title>
      <meta name="description" content="Jax Bar & Grill in Bucerias, Nayarit, Mexico is home to the best live music in Banderas Bay. With bands on the stage every day of the week, the party never stops at Jax, your #1 destination for entertainment and nightlife in Riviera Nayarit." />
      <meta name="keywords" content="Jax, Bucerias, Nayarit, Nightlife, Live Music, Live Bands, Trivia, Events, Party, Bar, Entertainment, Centro" />
    </>
  )
}