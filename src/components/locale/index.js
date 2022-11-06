import React from 'react'
import { useRecoilState } from 'recoil'
import { localeState } from '../../recoil'

const Switch = () => {

    const [ locale, setLocale ] = useRecoilState(localeState)

    return(

        <button
            onClick={locale === 'en' ? () => setLocale('sp') : () => setLocale('en')}
            className="ml-6"
        >
            <span className={`transition-all ${locale === 'en' ? 'text-lg font-bold text-red-700 bg-neutral-100 px-2 py-1 rounded-full' : 'hover:text-red-400'}`}>
                {locale === 'en' ? 'En' : 'English'}
            </span>
            <span className={`ml-2 transition-all ${locale === 'en' ? 'hover:text-red-400' : 'text-lg font-bold text-red-700 bg-neutral-100 px-2 py-1 rounded-full'}`}>
                {locale === 'en' ? 'Español' : 'Es'}
            </span>
        </button>

    )
}

export default Switch