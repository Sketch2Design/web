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

    const [hover, sethover] = useState(false)

    const { currentElement } = useCanvasContext()
    const { externalCurrent } = useExternalCanvasContext()

    return (
        <>
            {currentElement.id !== id && (
                <Hover
                    hover={{
                        isHover: hover,
                        values: {
                            x: shapeProps.x - 1,
                            y: shapeProps.y - 1,
                            width: shapeProps.width + 2,
                            height: shapeProps.height + 2,
                            strokeWidth: shapeProps.strokeWidth,
                            stroke: '#A341FE',
                        },
                    }}
                />
            )}
            {externalCurrent.id === id && (
                <Hover
                    hover={{
                        isHover: true,
                        values: {
                            x: shapeProps.x - 1,
                            y: shapeProps.y - 1,
                            width: shapeProps.width + 2,
                            height: shapeProps.height + 2,
                            strokeWidth: shapeProps.strokeWidth,
                            stroke: '#B60000',
                        },
                    }}
                />
            )}
            <Rect
                ref={shape}
                {...shapeProps}
                {...events}
                onMouseEnter={() => {
                    sethover(true)
                    // el.getClientRect()
                }}
                onMouseLeave={() => {
                    sethover(false)
                }}
                draggable={true}
            />

            {currentElement.id === id && !currentElement.delete && (
                <Transform ref={shape} isSelected={true} />
            )}
        </>
    )
}
