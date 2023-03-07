import { useEffect } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import useMouseMove from './useMouseMove'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useDraw(ref) {
    const [start, end] = useMouseMove(ref)

    const { canvasItemsDispatch, setcurrentElement } = useCanvasContext()
    const { element, elementDispatch } = useElementContext()

    useEffect(() => {
        if (
            element?.id !== null &&
            start !== null &&
            end !== null &&
            start.x !== end.x
        ) {
            canvasItemsDispatch({
                current: setcurrentElement,
                type: CANVAS_ACTIONS.ADD,
                values: {
                    main: element.main,
                    value: element.value,
                    radius:
                        element.value == 'Circle' &&
                        Math.abs((end.x - start.y) * 2),
                    sx: start.x,
                    sy: start.y,
                    ex: end.x,
                    ey: end.y,
                    w: Math.abs(end.x - start.x),
                    h: Math.abs(end.y - start.y),
                    fill: '#000000',
                    border: 0,
                    borderColor: '#440000',
                },
            })
        } else if (start?.x == end?.x) {
            elementDispatch({ type: ELEMENT_ACTIONS.RESET })
            ref.current.mouseClickEndShape == null &&
                setcurrentElement({ id: null, type: null })
        }
    }, [end])
}
