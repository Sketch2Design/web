import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useFont() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    const [font, setfont] = useState(() => {
        return {
            fontSize: currentElement?.values?.fontSize || 24,
            fontStyle: currentElement?.values?.fontStyle || 'normal',
            textDecoration: currentElement?.values?.textDecoration || '',
        }
    })

    useEffect(() => {
        changeFontSettings()
    }, [font])

    function changeFontSettings() {
        currentElement.id !== null &&
            currentElementDispatch({
                type: CURRENT_ACTIONS.UPDATE,
                values: {
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
