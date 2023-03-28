import { useMemo } from 'react'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import Rectangle from './Rectangle'
import Ellipse from './Ellipse'

const SHAPES = {
    Rectangle: Rectangle,
    Ellipse: Ellipse,
}

export default function DrawShapes() {
    const { canvasItems, currentElementDispatch, currentElement } =
        useCanvasContext()
    const { externalCurrent } = useExternalCanvasContext()

    const { elementDispatch } = useElementContext()

    const shapes = useMemo(
        () =>
            canvasItems?.map((item) => {
                if (
                    item.main === 'Shapes' &&
                    item.id !== currentElement?.id &&
                    item.id !== externalCurrent?.id
                ) {
                    const Shape = SHAPES[item.type]
                    return (
                        <Shape
                            key={item.id}
                            shapeProps={item}
                            id={item.id}
                            events={{
                                onClick: () => {
                                    if (currentElement?.id == null) {
                                        currentElementDispatch({
                                            type: CURRENT_ACTIONS.CHANGE,
                                            id: item.id,
                                            values: item,
                                        })
                                    } else {
                                        currentElementDispatch({
                                            type: CURRENT_ACTIONS.FORCE,
                                        })
                                    }
                                },
                                onDragStart: () => {
                                    elementDispatch({
                                        type: ELEMENT_ACTIONS.RESET,
                                    })
                                    if (currentElement?.id == null) {
                                        currentElementDispatch({
                                            type: CURRENT_ACTIONS.CHANGE,
                                            id: item.id,
                                            values: item,
                                        })
                                    } else {
                                        currentElementDispatch({
                                            type: CURRENT_ACTIONS.FORCE,
                                        })
                                    }
                                },
                            }}
                        />
                    )
                }
            }),
        [canvasItems, currentElement.id, externalCurrent.id]
    )

    return shapes
}
