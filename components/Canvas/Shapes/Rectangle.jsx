import { useRef, useState } from 'react'
import { Rect } from 'react-konva'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'
import Hover from '../Transform/Hover'

export default function Rectangle({ shapeProps, id, events }) {
    const shape = useRef(null)

    const [hover, sethover] = useState({ isHover: false, values: {} })

    const { currentElement } = useCanvasContext()
    const { externalCurrent } = useExternalCanvasContext()

    return (
        <>
            {currentElement.id !== id && <Hover hover={hover} />}
            {externalCurrent.id === id && (
                <Hover
                    hover={{
                        isHover: true,
                        values: {
                            x: shapeProps.x,
                            y: shapeProps.y,
                            width: shapeProps.width,
                            height: shapeProps.height,
                            stroke: '#B60000',
                        },
                    }}
                />
            )}
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
                draggable={true}
                // draggable={currentElement.id === id ? true : false}
            />

            {currentElement.id === id && (
                <Transform ref={shape} isSelected={true} />
            )}
        </>
    )
}
