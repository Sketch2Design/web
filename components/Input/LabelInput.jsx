import { forwardRef } from 'react'

import Input from './Input'

const LabelInput = forwardRef(function LabelInput(
    { name, type, placeholder, defaultValue },
    ref
) {
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
                <label className="text-xl font-bold" htmlFor={name}>
                    {placeholder}
                </label>
            </div>
            <Input
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
            />
        </div>
    )
})
export default LabelInput
