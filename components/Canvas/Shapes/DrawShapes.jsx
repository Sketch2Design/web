import { useMemo } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import Rectangle from './Rectangle'
import Ellipse from './Ellipse'

const SHAPES = {
    Rectangle: Rectangle,
    Ellipse: Ellipse,
}

export default function DrawShapes() {
    const {
        canvasItems,
        canvasItemsDispatch,
        setcurrentElement,
        currentElement,
    } = useCanvasContext()
    const { elementDispatch } = useElementContext()

    function onChange(attr, id) {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: { id: id, ...attr },
        })
    }

    const shapes = useMemo(
        () =>
            canvasItems?.map((item) => {
                if (item.main == 'Shapes') {
                    const Shape = SHAPES[item.type]
                    return (
                        <Shape
                            key={item.id}
                            shapeProps={item}
                            id={item.id}
                            events={{
                                onClick: () => {
                                    if (currentElement?.id !== item.id) {
                                        setcurrentElement({
                                            id: item.id,
                                            type: item.main,
                                            value: item.type,
                                        })
                                    }
                                },
                                onDragStart: () => {
                                    elementDispatch({
                                        type: ELEMENT_ACTIONS.RESET,
                                    })
                                    setcurrentElement({
                                        id: item.id,
                                        type: item.main,
                                        value: item.type,
                                    })
                                },
                                onDragEnd(e) {
                                    onChange(
                                        {
                                            x: parseInt(e.target.x()),
                                            y: parseInt(e.target.y()),
                                        },
                                        item.id
                                    )
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
                                    onChange(
                                        {
                                            x: parseInt(node.x()),
                                            y: parseInt(node.y()),
                                            width: Math.max(
                                                5,
                                                parseInt(node.width() * scaleX)
                                            ),
                                            height: Math.max(
                                                5,
                                                parseInt(node.height() * scaleY)
                                            ),
                                        },
                                        item.id
                                    )
                                },
                            }}
                        />
                    )
                }
            }),
        [canvasItems, currentElement]
    )

    return shapes
}
