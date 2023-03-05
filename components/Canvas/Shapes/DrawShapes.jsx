import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { useMemo } from 'react'

import Rectangle from './Rectangle'

const SHAPES = {
    Rectangle: Rectangle,
}

export default function DrawShapes() {
    const { canvasItems, canvasItemsDispatch, setcurrentElement } =
        useCanvasContext()


    const shapes = useMemo(
        () =>
            canvasItems?.map((item) => {
                if (item.main == 'Shapes') {
                    const Shape = SHAPES[item.value]
                    return (
                        <Shape
                            key={item.id}
                            shapeProps={item}
                            id={item.id}
                            onSelect={() => {
                                setcurrentElement({
                                    id: item.id,
                                    type: item.main,
                                })
                            }}
                            onChange={(newAttrs) => {
                                canvasItemsDispatch({
                                    type: CANVAS_ACTIONS.UPDATE,
                                    values: { id: item.id, ...newAttrs },
                                })
                            }}
                        />
                    )
                }
            }),
        [canvasItems]
    )

    return shapes
}
