import React from 'react'

const MenuItem = ({ _key, item, category }) => {

    return(
        <li 
            key={_key}
            className={`flex flex-col ${item.description ? 'pt-2 pb-1' : 'py-0'}`}
        >
            <div className="flex flex-row items-center">
                {item.title ?
                    <span className="text-2xl headers filter drop-shadow-md">
                        {item.title}
                    </span>
                : null }
                {item.price ?
                    <span className="ml-2 text-2xl text-red-500 headers filter drop-shadow-md">
                        ${item.price}
                    </span>
                : null}
            </div>
            <div className="mb-1">      
                {item.description ? <span>{item.description}</span> : null} 
            </div>
        </li>
    )
}

export default MenuItem