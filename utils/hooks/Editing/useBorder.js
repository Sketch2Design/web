import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'

export function useBorder() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [border, setborder] = useState(null)

    useEffect(() => {
        border && changeBorder()
    }, [border])

    useEffect(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        if (c !== null) {
            setborder({
                width: c.strokeWidth,
                color: c.stroke,
                radius: c.cornerRadius,
            })
        }
    }, [currentElement])

    function changeBorder() {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: {
                id: currentElement.id,
                stroke: border.color,
                strokeWidth: parseInt(border.width),
                cornerRadius: parseInt(border.radius),
            },
        })
    }

    return [border, setborder]
}
