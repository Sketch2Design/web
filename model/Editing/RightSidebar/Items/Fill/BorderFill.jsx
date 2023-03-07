import { useEffect, useRef, useState } from 'react'

import ColorPicker from '@/components/Input/Color/ColorPicker'
import Fill from '.'

export default function BorderFill({ color, setborder }) {
    const [open, setopen] = useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.value = color?.slice(1)?.toUpperCase()
    }, [color])

    return (
        <div className="flex flex-col space-y-4 px-1">
            <Fill
                color={color}
                inputRef={inputRef}
                handleColorPickerOpen={() => setopen((prev) => !prev)}
                handleColorChange={(c) =>
                    setborder((prev) => ({ ...prev, color: c }))
                }
                w="w-9"
                h="h-7"
            />
            {open && (
                <ColorPicker
                    handleClose={() => setopen(false)}
                    color={color}
                    onChange={(c) => {
                        setborder((prev) => ({ ...prev, color: c }))
                        inputRef.current.value = c.slice(1).toUpperCase()
                    }}
                />
            )}
        </div>
    )
}
