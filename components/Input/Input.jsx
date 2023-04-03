import { forwardRef } from 'react'

const Input = forwardRef(function Input(
    { name, type, placeholder, disabled, defaultValue },
    ref
) {
    return (
        <input
            ref={ref}
            defaultValue={defaultValue}
            className={`h-16 w-80 rounded-md bg-zinc-800 px-4  text-zinc-500
            outline-none placeholder:text-zinc-500 
            focus:border
            focus:border-violet-600 
            disabled:cursor-not-allowed disabled:bg-zinc-700`}
            type={type}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
        />
    )
})

export default Input
