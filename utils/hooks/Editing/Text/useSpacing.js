import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useSpacing() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    const [spacing, setspacing] = useState(() => {
        return {
            lineHeight: currentElement?.values?.lineHeight || 1,
            letterSpacing: currentElement?.values?.letterSpacing || 0,
        }
    })

    useEffect(() => {
        changeSpacing()
    }, [spacing])

    function changeSpacing() {
        currentElement.id !== null &&
            currentElementDispatch({
                type: CURRENT_ACTIONS.UPDATE,
                values: {
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
