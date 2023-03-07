import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export function useBorder() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [border, setborder] = useState({
        width: canvasItems?.[currentElement.id - 1]?.border,
        color: canvasItems?.[currentElement.id - 1]?.borderColor,
    })
    console.log(border)

    useEffect(() => {
        changeBorder()
    }, [border])

    useEffect(() => {
        setborder({
            width: canvasItems?.[currentElement.id - 1]?.border,
            color: canvasItems?.[currentElement.id - 1]?.borderColor,
        })
    }, [currentElement])

    function changeBorder() {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: {
                id: currentElement.id,
                borderColor: border.color,
                border: parseInt(border.width),
            },
        })
    }

    return [border, setborder]
}
