import { useRef, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function IncreaseDecrease({ name }) {
    const ref = useRef()

    function handleChange(change) {
        if (change == 'a') {
            ref.current.value++
        } else if (change == 's') {
            ref.current.value == 1
                ? (ref.current.value = 1)
                : ref.current.value--
        }
    }

    return (
        <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-1">
                <span
                    className="edit_sidebar_icon_wrapper"
                    onClick={() => handleChange('a')}
                >
                    <AiOutlinePlus className="w-4 h-4 text-white" />
                </span>
                <input
                    name={name}
                    type="number"
                    className="edit_input_default w-12 px-2"
                    min="1"
                    defaultValue={16}
                    ref={ref}
                />

                <span
                    className="edit_sidebar_icon_wrapper"
                    onClick={() => handleChange('s')}
                >
                    <AiOutlineMinus className="w-4 h-4 text-white" />
                </span>
            </div>
        </div>
    )
}
