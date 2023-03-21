import { useRef, useState } from 'react'
import { Group, Text as Txt } from 'react-konva'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'
import Hover from '../Transform/Hover'

export default function Text({ textProps, id, events }) {
    const text = useRef(null)

    const [hover, sethover] = useState({ isHover: false, values: {} })

    const { currentElement } = useCanvasContext()

    return (
        <Group>
            {currentElement.id !== id && <Hover hover={hover} />}
            <Txt
                ref={text}
                {...textProps}
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
                <Transform ref={text} shape="Text" isSelected={true} />
            )}
        </Group>
    )
}
