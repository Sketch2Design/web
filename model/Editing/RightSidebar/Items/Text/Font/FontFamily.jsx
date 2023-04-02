import { useRef } from 'react'

import { RxFontFamily } from 'react-icons/rx'

import EditableInput from '@/components/Input/EditableInput'

function FontFamily() {
    const inputRef = useRef()

    return (
        <div className="flex items-center space-x-4">
            <RxFontFamily className="h-8 w-10" />

            <EditableInput
                ref={inputRef}
                defaultValue={'Arial'}
                type="number"
                w="w-12"
                h="h-7"
                onChange={() => {
                    const val = inputRef.current.value
                    setborder((prev) => ({
                        ...prev,
                        radius: val === '' ? 0 : parseInt(val),
                    }))
                    val === '' && (inputRef.current.value = 0)
                }}
            />
        </div>
    )
}

export default FontFamily
