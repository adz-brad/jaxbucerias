import './src/styles/global.css'
import React from 'react'
import Layout from './src/components/layout'
import { RecoilRoot } from 'recoil'

export const wrapPageElement = ({ element }) => {
    
    return(
        <Layout>
            {element}
        </Layout>
    )
}

export const wrapRootElement = ({ element }) => {
    return (
        <RecoilRoot>
            {element}
        </RecoilRoot>
    )
}