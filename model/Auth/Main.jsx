import React from 'react'

export default function Main({ heading, subheading }) {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-5xl">{heading}</h1>
                <p className="text-zinc-500 py-1 text-lg">{subheading}</p>
            </div>
        </div>
    )
}
