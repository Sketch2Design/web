import { useRef, useState } from 'react'
import { Group, Rect } from 'react-konva'

import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'

export default function Rectangle({ shapeProps, id, onChange }) {
    const shape = useRef(null)

    const [hover, sethover] = useState({ isHover: false, stroke: 0 })

    const { elementDispatch } = useElementContext()
    const { currentElement, setcurrentElement } = useCanvasContext()

    return (
        <Group>
            {hover.isHover && currentElement.id !== id ? (
                <Rect
                    width={shapeProps.w + hover.stroke}
                    height={shapeProps.h + hover.stroke}
                    x={shapeProps.sx - hover.stroke / 2}
                    y={shapeProps.sy - hover.stroke / 2}
                    fill="transparent"
                    stroke="#810096"
                    strokeWidth={5}
                />
            ) : (
                <></>
            )}
            <Rect
                key={shapeProps.id}
                width={shapeProps.w}
                height={shapeProps.h}
                x={shapeProps.sx}
                y={shapeProps.sy}
                fill={shapeProps.fill}
                stroke={shapeProps.borderColor}
                strokeWidth={shapeProps.border}
                onClick={() => {
                    setcurrentElement({ id: id, type: 'Shapes' })
                }}
                ref={shape}
                onMouseEnter={(e) => {
                    const el = e.target
                    console.log(el.strokeWidth())
                    sethover({ isHover: true, stroke: el.strokeWidth() })
                }}
                onMouseLeave={(e) => {
                    sethover({ isHover: false, stroke: 0 })
                }}
                draggable
                onDragStart={() => {
                    elementDispatch({ type: ELEMENT_ACTIONS.RESET })
                    setcurrentElement({ id: id, type: 'Shapes' })
                }}
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        sx: parseInt(e.target.x()),
                        sy: parseInt(e.target.y()),
                    })
                }}
                onTransformStart={() => {
                    elementDispatch({ type: ELEMENT_ACTIONS.RESET })
                }}
                onTransformEnd={(e) => {
                    const node = shape.current
                    const scaleX = node.scaleX()
                    const scaleY = node.scaleY()

                    node.scaleX(1)
                    node.scaleY(1)
                    onChange({
                        ...shapeProps,
                        sx: parseInt(node.x()),
                        sy: parseInt(node.y()),
                        w: Math.max(5, parseInt(node.width() * scaleX)),
                        h: Math.max(5, parseInt(node.height() * scaleY)),
                    })
                }}
            />

            {currentElement.id === id && (
                <Transform ref={shape} isSelected={true} />
            )}
        </Group>
    )
}
