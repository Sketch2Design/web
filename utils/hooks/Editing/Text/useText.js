import { useEffect, useState } from 'react'

import { getCurrentElement } from '@/utils/helpers/canvas.helper'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useText() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [text, settext] = useState(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        return c?.text || 'Text'
    })

    useEffect(() => {
        changeText()
    }, [text])

    function changeText() {
        const c = getCurrentElement(canvasItems, currentElement.id)
        c !== null &&
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: {
                    id: currentElement.id,
                    text: text,
                    height:
                        parseInt(c.fontSize * text.split('\n').length) *
                        c.lineHeight,
                },
            })
    }

    return [text, settext]
}
