import { useMemo } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import Rectangle from './Rectangle'
import Ellipse from './Ellipse'

const SHAPES = {
    Rectangle: Rectangle,
    Ellipse: Ellipse,
}

export default function CurrentShape() {
    const { currentElementDispatch, currentElement } = useCanvasContext()
    const { elementDispatch } = useElementContext()

    function onChange(attr) {
        currentElementDispatch({
            type: CURRENT_ACTIONS.UPDATE,
            values: attr,
        })
    }

    const shape = useMemo(() => {
        const item = currentElement.values
        const Shape = SHAPES[item?.type]
        return (
            <Shape
                key={item.id}
                shapeProps={item}
                id={item.id}
                events={{
                    onDragEnd(e) {
                        onChange({
                            x: parseInt(e.target.x()),
                            y: parseInt(e.target.y()),
                        })
                    },
                    onTransformStart() {
                        elementDispatch({
                            type: ELEMENT_ACTIONS.RESET,
                        })
                    },
                    onTransformEnd(e) {
                        const node = e.target
                        const scaleX = node.scaleX()
                        const scaleY = node.scaleY()

                        node.scaleX(1)
                        node.scaleY(1)
                        onChange({
                            x: parseInt(node.x()),
                            y: parseInt(node.y()),
                            width: Math.max(5, parseInt(node.width() * scaleX)),
                            height: Math.max(
                                5,
                                parseInt(node.height() * scaleY)
                            ),
                        })
                    },
                }}
            />
        )
    }, [currentElement])

    return shape
}
