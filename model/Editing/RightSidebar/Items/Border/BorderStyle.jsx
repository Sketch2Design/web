import { memo, useEffect, useRef } from 'react'

import { RxBorderWidth } from 'react-icons/rx'

import EditableInput from '@/components/Input/EditableInput'

const BorderStyle = memo(function BorderStyle({ width, setborder }) {
    const inputRef = useRef()

    useEffect(() => {
        width == 0
            ? (inputRef.current.value = 0)
            : (inputRef.current.value = width)
    }, [width])

    return (
        <div className="flex items-center space-x-4">
            <RxBorderWidth className="h-8 w-10" />
            <EditableInput
                ref={inputRef}
                defaultValue={width == null ? 0 : width}
                type="number"
                w="w-12"
                h="h-7"
                onChange={(val) => {
                    setborder((prev) => ({
                        ...prev,
                        width: val === '' ? 0 : parseInt(val),
                    }))
                    val === '' && (inputRef.current.value = 0)
                }}
            />
        </div>
    )
})

export default BorderStyle
