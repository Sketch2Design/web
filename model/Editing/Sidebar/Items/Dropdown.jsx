import React from 'react'

export default function Dropdown({ name }) {
    return (
        <>
            <select
                name={name}
                className="edit_input_default "
                defaultValue="Normal"
            >
                <option value="hi" />
                <option value="Normal" />
            </select>
        </>
    )
}
