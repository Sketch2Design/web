import React from 'react'

export default function SmallCard() {
    return (
        <div className="flex flex-col space-y-2">
            <div className="bg-zinc-800 h-60 w-52 rounded-md"></div>
            <div className="flex flex-col">
                <h5 className="text-white">Heading</h5>
                <h6 className="text-zinc-500">Sub heading</h6>
            </div>
        </div>
    )
}
