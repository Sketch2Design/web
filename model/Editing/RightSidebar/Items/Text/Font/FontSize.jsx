import { useRef } from 'react'

import { RiFontSize } from 'react-icons/ri'

import EditableInput from '@/components/Input/EditableInput'

function FontSize({ size, setfont }) {
    const inputRef = useRef()

    return (
        <div className="flex items-center space-x-4 ">
            <RiFontSize className="h-8 w-8" />

            <EditableInput
                ref={inputRef}
                defaultValue={size}
                type="number"
                w="w-12"
                h="h-7"
                onChange={() => {
                    const val = inputRef.current.value
                    setfont((prev) => ({
                        ...prev,
                        fontSize: parseInt(val),
                    }))
                }}
            />
        </div>
    )
}

export default FontSize
