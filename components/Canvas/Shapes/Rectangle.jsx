import { useRef, useState } from 'react'
import { Rect } from 'react-konva'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'
import Hover from '../Transform/Hover'

export default function Rectangle({ shapeProps, id, events }) {
    const shape = useRef(null)

    const [hover, sethover] = useState({ isHover: false, values: {} })

    const { currentElement } = useCanvasContext()

    return (
        <>
            {currentElement.id !== id && <Hover hover={hover} />}
            <Rect
                ref={shape}
                {...shapeProps}
                {...events}
                onMouseEnter={(e) => {
                    const el = e.target
                    sethover({ isHover: true, values: el.getClientRect() })
                }}
                onMouseLeave={() => {
                    sethover({ isHover: false, values: {} })
                }}
                draggable={currentElement.id === id ? true : false}
            />

            {currentElement.id === id && (
                <Transform ref={shape} isSelected={true} />
            )}
        </>
    )
}
