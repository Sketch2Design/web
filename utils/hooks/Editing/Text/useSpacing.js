import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useSpacing() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [spacing, setspacing] = useState(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        return {
            lineHeight: c?.lineHeight || 1,
            letterSpacing: c?.letterSpacing || 0,
        }
    })

    useEffect(() => {
        changeSpacing()
    }, [spacing])

    function changeSpacing() {
        const c = getCurrentElement(canvasItems, currentElement.id)
        c !== null &&
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: {
                    id: currentElement.id,
                    lineHeight: spacing.lineHeight,
                    letterSpacing: spacing.letterSpacing,
                    height:
                        parseInt(c.fontSize * c.text.split('\n').length) *
                        spacing.lineHeight,
                },
            })
    }

    return [spacing, setspacing]
}
