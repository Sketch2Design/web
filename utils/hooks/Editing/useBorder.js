import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export function useBorder() {
    const { currentElement, currentElementDispatch } = useCanvasContext()

    const [border, setborder] = useState(() => {
        return {
            width: currentElement?.values?.strokeWidth || 0,
            color: currentElement?.values?.stroke || '#000000',
            radius: currentElement?.values?.cornerRadius || 0,
        }
    })

    useEffect(() => {
        border && changeBorder()
    }, [border])

    function changeBorder() {
        currentElementDispatch({
            type: CURRENT_ACTIONS.UPDATE,
            values: {
                stroke: border.color,
                strokeWidth: parseInt(border.width),
                cornerRadius: parseInt(border.radius),
            },
        })
    }

    return [border, setborder]
}
