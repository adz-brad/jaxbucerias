require("dotenv").config()
  
  module.exports = {
  siteMetadata: {
    title: `Jax Bucerias`,
    description:
      "Home of the best live music in the bay - Jax Bucerias is the life of the party in Riviera Nayarit",
    keywords:
      "Jax, Jax Bar & Grill, Jax Bucerias, Live Music Bucerias, Live Music Puerto Vallarta, Live Music Nuevo Vallarta, Bucerias, Riviera Nayarit, Mexico, Bands, Nightlife",
    siteUrl: "https://www.jaxbucerias.com",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Jax Bucerias",
        short_name: `Jax Bucerias`,
        background_color: `#18181b`,
        lang: `en`,
        theme_color: `#dc2626`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: "none",
        icon: `src/assets/images/favicon.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images`
      },
      __key: "images"
    }, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [600, 768, 992, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-gtag`, 
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head: false
      },
    },
    'gatsby-plugin-preact'
  ],
}
