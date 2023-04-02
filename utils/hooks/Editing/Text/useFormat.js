import { useEffect, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useFormat() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    const [format, setformat] = useState(() => {
        return {
            fontStyle: currentElement?.values?.fontStyle || 'normal',
            textDecoration: currentElement?.values?.textDecoration || '',
        }
    })

    useEffect(() => {
        changeFontSettings()
    }, [format])

    function changeFontSettings() {
        if (currentElement.id !== null) {
            currentElementDispatch({
                type: CURRENT_ACTIONS.UPDATE,
                values: {
                    fontStyle: format.fontStyle,
                    textDecoration: format.textDecoration,
                },
            })
        }
    }

    return [format, setformat]
}
