import { useRef, useState } from 'react'
import { Text as Txt } from 'react-konva'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'
import Hover from '../Transform/Hover'

export default function Text({ textProps, id, events }) {
    const text = useRef(null)

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
                            x: textProps.x - 1,
                            y: textProps.y - 1,
                            width: textProps.width + 2,
                            height: textProps.height
                                ? textProps.height + 2
                                : textProps.fontSize + 2,
                            strokeWidth: textProps.strokeWidth,
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
                            x: textProps.x - 1,
                            y: textProps.y - 1,
                            width: textProps.width + 2,
                            height: textProps.height
                                ? textProps.height + 2
                                : textProps.fontSize + 2,
                            strokeWidth: textProps.strokeWidth,
                            stroke: '#B60000',
                        },
                    }}
                />
            )}
            <Txt
                ref={text}
                {...textProps}
                {...events}
                onMouseEnter={() => {
                    sethover(true)
                }}
                onMouseLeave={() => {
                    sethover(false)
                }}
                draggable={true}
            />

            {currentElement.id === id && !currentElement.delete && (
                <Transform ref={text} shape="Text" isSelected={true} />
            )}
        </>
    )
}
