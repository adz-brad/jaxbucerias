import React from 'react'
import { useRecoilValue } from 'recoil'
import { localeState } from '../../../recoil'

const Item = ({ _key, item, onClick }) => {

    const locale = useRecoilValue(localeState)

    return (
        <li key={_key}>
            <button
                className="flex flex-col h-full w-full bg-zinc-800/50 hover:bg-zinc-800/80 p-4 rounded-sm hover:shadow-lg"
                onClick={onClick}
            >
                <div className="flex flex-row items-center w-full">
                    <span className="text-left text-xl uppercase font-bold mr-2">
                        {locale === 'en' ? item.title.en : item.title.sp.length > 0 ? item.title.sp : item.title.en }
                    </span>
                    <span className="text-xl text-green-600 ml-auto font-bold">
                        ${item.price}
                    </span>
                </div>
                {item.description ?
                    <span className="text-sm text-left mt-2">
                        {locale === 'en' ? item.description.en : item.description.sp.length > 0 ? item.description.sp : item.description.en }
                    </span>
                : null }
            </button>
        </li>
    )
}

export default Item