import React from 'react'

export default function SmallCard({ name, image, onClick }) {
    return (
        <div
            className="flex cursor-pointer flex-col space-y-2 hover:scale-95"
            onClick={onClick}
        >
            <img src={image} className="h-60 w-52 rounded-md" />
            <div className="flex flex-col">
                <h5 className="text-white">{name}</h5>
            </div>
        </div>
    )
}
