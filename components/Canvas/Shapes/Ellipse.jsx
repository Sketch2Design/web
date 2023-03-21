import { useRef, useState } from 'react'
import { Group, Ellipse as Circ } from 'react-konva'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'
import Hover from '../Transform/Hover'

export default function Ellipse({ shapeProps, id, events }) {
    const shape = useRef(null)

    const [hover, sethover] = useState({ isHover: false, values: {} })

    const { currentElement } = useCanvasContext()

    return (
        <Group>
            {currentElement.id !== id && <Hover hover={hover} />}
            <Circ
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
                draggable
            />

            {currentElement.id === id && (
                <Transform ref={shape} shape="Circle" isSelected={true} />
            )}
        </Group>
    )
}
