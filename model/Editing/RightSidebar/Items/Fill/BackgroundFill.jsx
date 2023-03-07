import { useEffect, useRef, useState } from 'react'

import { useColor } from '@/utils/hooks/Editing/useColor'

import ColorPicker from '@/components/Input/Color/ColorPicker'
import Fill from '../Fill'

export default function BackgroundFill({ type }) {
    const [color, setcolor] = useColor(type)

    const [open, setopen] = useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.value = color?.slice(1)?.toUpperCase()
    }, [color])

    return (
        <div className="flex flex-col space-y-4">
            <Fill
                color={color}
                inputRef={inputRef}
                handleColorPickerOpen={() => setopen((prev) => !prev)}
                handleColorChange={(color) => setcolor(color)}
            />
            {open && (
                <ColorPicker
                    handleClose={() => setopen(false)}
                    color={color}
                    onChange={(color) => {
                        setcolor(color)
                        inputRef.current.value = color.slice(1).toUpperCase()
                    }}
                />
            )}
        </div>
    )
}
