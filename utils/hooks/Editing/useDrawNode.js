import { useEffect } from 'react'

import {
    useCanvasContext,
    useExportContext,
} from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useDrawNode(ref) {
    const { canvas } = useExportContext()
    const { currentElementDispatch, currentElement } = useCanvasContext()
    const { element, elementDispatch } = useElementContext()

    useEffect(() => {
        const start = { x: canvas.size.w / 2 - 100, y: canvas.size.h / 2 - 100 }
        const end = { x: canvas.size.w / 2 + 100, y: canvas.size.h / 2 + 100 }
        if (element?.id !== null) {
            let values = {
                main: element.main,
                type: element.type,
                x: start.x,
                y: start.y,
                width: Math.abs(end.x - start.x),
                height: Math.abs(end.y - start.y),
                fill: '#000000',
                stroke: '#440000',
                strokeWidth: 0,
                cornerRadius: 0,
            }
            if (element.type == 'Text') {
                values.fontSize = 24
                values.text = 'Text'
                values.width = Math.max(60, Math.abs(end.x - start.x))
                values.height = 24
                values.align = 'left'
                values.verticalAlign = 'middle'
                values.wrap = 'none'
            }
            currentElementDispatch({
                type: CURRENT_ACTIONS.ADD,
                id: null,
                values: values,
            })
        }
    }, [element])

    function reset() {
        element?.id !== null && elementDispatch({ type: ELEMENT_ACTIONS.RESET })
        if (currentElement.id !== null) {
            currentElementDispatch({ type: CURRENT_ACTIONS.RESET })
        }
    }

    return reset
}
