import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useText() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    const [text, settext] = useState(() => {
        return currentElement?.values?.text || 'Text'
    })

    useEffect(() => {
        changeText()
    }, [text])

    function changeText() {
        currentElement.id !== null &&
            currentElementDispatch({
                type: CURRENT_ACTIONS.UPDATE,
                values: {
                    text: text,
                    height:
                        parseInt(c.fontSize * text.split('\n').length) *
                        c.lineHeight,
                },
            })
    }

    return [text, settext]
}
