import { useRef } from 'react'
import { Rect } from 'react-konva'

import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import Transform from '../Transform'

export default function Rectangle({ shapeProps, id, onSelect, onChange }) {
    const shape = useRef(null)

    const { elementDispatch } = useElementContext()
    const { currentElement, setcurrentElement } = useCanvasContext()

    return (
        <>
            <Rect
                key={shapeProps.id}
                width={shapeProps.w}
                height={shapeProps.h}
                x={shapeProps.sx}
                y={shapeProps.sy}
                fill="green"
                onClick={() => {
                    setcurrentElement(id)
                }}
                ref={shape}
                draggable
                onDragStart={(e) => {
                    elementDispatch({ type: ELEMENT_ACTIONS.RESET })
                    setcurrentElement(id)
                }}
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        sx: parseInt(e.target.x()),
                        sy: parseInt(e.target.y()),
                    })
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
                        w: Math.max(5, node.width() * scaleX),
                        h: Math.max(5, node.height() * scaleY),
                    })
                }}
            />
            {currentElement == id && (
                <Transform ref={shape} isSelected={true} />
            )}
        </>
    )
}
