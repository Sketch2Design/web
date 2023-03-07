import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export function useColor(type) {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [color, setcolor] = useState(
        canvasItems?.[currentElement.id - 1]?.fill
    )

    useEffect(() => {
        changeColor()
    }, [color])

    useEffect(() => {
        setcolor(canvasItems?.[currentElement.id - 1]?.fill)
    }, [currentElement])

    function changeColor() {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: { id: currentElement.id, fill: color },
        })
    }

    return [color, setcolor]
}
