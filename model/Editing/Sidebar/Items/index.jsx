import React, { Children } from 'react'

function Items({ children }) {
    return (
        <div className="flex flex-col space-y-1">
            {Children.map(children, (child) => child)}
        </div>
    )
}

function Group({ children }) {
    return (
        <div className="flex flex-col space-y-3 border border-x-0 py-4  border-zinc-700">
            {Children.map(children, (child) => child)}
        </div>
    )
}

Items.Group = Group

export default Items
