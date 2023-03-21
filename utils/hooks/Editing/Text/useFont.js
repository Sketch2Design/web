import { useEffect, useState } from 'react'

import { getCurrentElement } from '@/utils/helpers/canvas.helper'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useFont() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [font, setfont] = useState(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        return {
            fontSize: c?.fontSize || 24,
            fontStyle: c?.fontStyle || 'normal',
            textDecoration: c?.textDecoration || '',
        }
    })

    useEffect(() => {
        changeFontSettings()
    }, [font])

    function changeFontSettings() {
        const c = getCurrentElement(canvasItems, currentElement.id)
        c !== null &&
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: {
                    id: currentElement.id,
                    height:
                        parseInt(font.fontSize * c.text.split('\n').length) *
                        c.lineHeight,
                    fontSize: font.fontSize,
                    fontStyle: font.fontStyle,
                    textDecoration: font.textDecoration,
                },
            })
    }

    return [font, setfont]
}
