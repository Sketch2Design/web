import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export function useColor() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    const [color, setcolor] = useState(() => {
        return currentElement?.values?.fill || '#000000'
    })

    useEffect(() => {
        changeColor()
    }, [color])

    function changeColor() {
        currentElementDispatch({
            type: CURRENT_ACTIONS.UPDATE,
            values: { fill: color },
        })
    }

    return [color, setcolor]
}
