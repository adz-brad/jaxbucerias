import './src/styles/global.css'
import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element }) => {
    
    return(
        <Layout>
            {element}
        </Layout>
    )
}