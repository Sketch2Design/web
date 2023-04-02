import React from 'react'

export default function EditableTextArea({
    top,
    left,
    width,
    height,
    size,
    color,
}) {
    return (
        <div
            contentEditable={true}
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                fontSize: size,
                color: color,
            }}
            className={`top  absolute z-50 m-0 resize-none 
            appearance-none border border-blue-600 p-0 text-black outline-none`}
        >
            text
        </div>
    )
}
