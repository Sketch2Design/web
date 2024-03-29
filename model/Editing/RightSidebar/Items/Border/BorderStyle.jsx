import { useRef } from 'react'

import { RxBorderWidth } from 'react-icons/rx'

import EditableInput from '@/components/Input/EditableInput'

function BorderStyle({ width, setborder }) {
    const inputRef = useRef(null)

    return (
        <div className="flex items-center space-x-4">
            <RxBorderWidth className="h-8 w-10" />
            <EditableInput
                ref={inputRef}
                defaultValue={width}
                type="number"
                w="w-12"
                h="h-7"
                onChange={() => {
                    const val = inputRef.current.value
                    setborder((prev) => ({
                        ...prev,
                        width: val === '' ? 0 : parseInt(val),
                    }))
                }}
            />
        </div>
    )
}

export default BorderStyle
