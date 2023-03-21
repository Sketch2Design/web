import EditableInput from '@/components/Input/EditableInput'
import useSpacing from '@/utils/hooks/Editing/Text/useSpacing'
import { useRef } from 'react'

import { CgFontHeight, CgFontSpacing } from 'react-icons/cg'

export default function Spacing() {
    const [spacing, setspacing] = useSpacing()

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 ">
                <CgFontHeight className="h-8 w-8" />

                <EditableInput
                    defaultValue={spacing.lineHeight}
                    type="number"
                    w="w-12"
                    h="h-7"
                    onChange={(e) => {
                        const val = e.target.value === '' ? 1 : e.target.value
                        setspacing((prev) => ({
                            ...prev,
                            lineHeight: parseFloat(val),
                        }))

                        if (e.target.value === '') e.target.value = 1
                    }}
                />
            </div>
            <div className="flex items-center space-x-4 ">
                <CgFontSpacing className="h-8 w-8" />

                <EditableInput
                    defaultValue={spacing.letterSpacing}
                    type="number"
                    w="w-12"
                    h="h-7"
                    onChange={(e) => {
                        const val = e.target.value
                        setspacing((prev) => ({
                            ...prev,
                            letterSpacing: parseFloat(val),
                        }))

                        if (e.target.value === '') e.target.value = 0
                    }}
                />
            </div>
        </div>
    )
}
