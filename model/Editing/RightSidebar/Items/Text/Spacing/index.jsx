import { useRef } from 'react'

import EditableInput from '@/components/Input/EditableInput'
import useSpacing from '@/utils/hooks/Editing/Text/useSpacing'

import { CgFontHeight, CgFontSpacing } from 'react-icons/cg'

export default function Spacing() {
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    const [spacing, setspacing] = useSpacing()

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 ">
                <CgFontHeight className="h-8 w-8" />

                <EditableInput
                    ref={inputRef1}
                    defaultValue={spacing.lineHeight}
                    type="number"
                    w="w-12"
                    h="h-7"
                    onChange={() => {
                        const val = inputRef1.current.value
                        setspacing((prev) => ({
                            ...prev,
                            lineHeight: parseFloat(val),
                        }))
                    }}
                />
            </div>
            <div className="flex items-center space-x-4 ">
                <CgFontSpacing className="h-8 w-8" />

                <EditableInput
                    ref={inputRef2}
                    defaultValue={spacing.letterSpacing}
                    type="number"
                    w="w-12"
                    h="h-7"
                    onChange={(e) => {
                        const val = inputRef2.current.value
                        setspacing((prev) => ({
                            ...prev,
                            letterSpacing: parseFloat(val),
                        }))
                    }}
                />
            </div>
        </div>
    )
}
