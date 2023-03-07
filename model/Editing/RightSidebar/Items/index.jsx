import React, { Children } from 'react'

function Items({ children }) {
    return (
        <div className="flex flex-col space-y-4">
            {Children.map(children, (child) => child)}
        </div>
    )
}

function Group({ children }) {
    return (
        <div className=" flex flex-col space-y-3 rounded-lg  bg-zinc-900 p-4">
            {Children.map(children, (child) => child)}
        </div>
    )
}

Items.Group = Group

export default Items
