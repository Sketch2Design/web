import { useEffect } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import useMouseMove from './useMouseMove'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useDraw(ref) {
    const [start, end] = useMouseMove(ref)

    const { canvasItemsDispatch, setcurrentElement, currentElement, canvas } =
        useCanvasContext()
    const { element, elementDispatch } = useElementContext()

    useEffect(() => {
        if (
            element?.id !== null &&
            start !== null &&
            end !== null &&
            start.x !== end.x
        ) {
            let values = {
                main: element.main,
                value: element.value,
                // radius:
                //     element.value == 'Circle' &&
                //     Math.abs((end.x - start.y) * 2),
                x: start.x,
                y: start.y,
                width: Math.abs(end.x - start.x),
                height: Math.abs(end.y - start.y),
                fill: '#000000',
                stroke: '#440000',
                strokeWidth: 0,
                cornerRadius: 0,
            }
            if (element.value == 'Circle') {
                values.height = Math.abs(end.x - start.x)
            } else if (element.value == 'Text') {
                values.fontSize = 24
                values.text = 'Text'
                values.width = Math.max(60, Math.abs(end.x - start.x))
                values.height = 24
                values.align = 'left'
                values.verticalAlign = 'middle'
            }
            canvasItemsDispatch({
                current: setcurrentElement,
                type: CANVAS_ACTIONS.ADD,
                values: values,
            })
        } else if (start?.x == end?.x) {
            element?.id !== null &&
                elementDispatch({ type: ELEMENT_ACTIONS.RESET })
            if (
                ref.current.mouseClickEndShape == null &&
                currentElement.id !== null
            ) {
                setcurrentElement({ id: null, type: null, value: null })
            }
        }
    }, [end])
}
