import { useRef } from 'react'

import { MdRoundedCorner } from 'react-icons/md'

import EditableInput from '@/components/Input/EditableInput'

function BorderRadius({ radius, setborder }) {
    const inputRef = useRef()

    return (
        <div className="flex items-center space-x-4">
            <MdRoundedCorner className="h-8 w-10" />

            <EditableInput
                ref={inputRef}
                defaultValue={radius}
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

export default BorderRadius
