import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'

export function useColor() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [color, setcolor] = useState(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        return c?.fill || '#000000'
    })

    useEffect(() => {
        changeColor()
    }, [color])

    function changeColor() {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: { id: currentElement.id, fill: color },
        })
    }

    return [color, setcolor]
}
