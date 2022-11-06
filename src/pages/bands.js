import React from "react"
import BandsDisplay from "../components/bands"

const Bands = () => {

  return(

    <div className="p-4">
      <BandsDisplay/>
    </div>
    
  )
}

export default Bands

export const Head = () => {
  return(
    <>
      <title>Live Bands - Jax Bucerias Nayarit</title>
      <meta name="description" content="Jax Bar & Grill in Bucerias, Nayarit, Mexico is home to the best live music in Banderas Bay. With bands on the stage every day of the week, the party never stops at Jax, your #1 destination for entertainment and nightlife in Riviera Nayarit." />
      <meta name="keywords" content="Jax, Bucerias, Nayarit, Nightlife, Live Music, Live Bands, Trivia, Events, Party, Bar, Entertainment, Centro" />
    </>
  )
}