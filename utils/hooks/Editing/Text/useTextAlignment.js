import { useEffect, useMemo, useState } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'

export function useShapeAlignment(type) {
    const { canvasItems, canvasItemsDispatch, currentElement, canvas } =
        useCanvasContext()

    const [horizontal, sethorizontal] = useState(null)
    const [vertical, setvertical] = useState(null)

    // useEffect(() => {
    //     handleAlignment()
    // }, [current])

    function handleHorizontalAlignment() {
        let updateValues = {}
        switch (horizontal) {
            case 'left':
                updateValues.align = 'left'
                break
            case 'center':
                updateValues.align = 'center'
                break
            case 'center':
                updateValues.align = 'center'
                break
        }

        if (Object.keys(updateValues).length !== 0) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: { id: currentElement.id, ...updateValues },
            })
        }
    }

    function handleVerticalAlignment() {
        let updateValues = {}
        switch (vertical) {
            case 'top':
                updateValues.verticalAlign = 'top'
                setvertical('top')
                break
            case 'middle':
                updateValues.verticalAlign = 'middle'
                setvertical('middle')
                break
            case 'bottom':
                updateValues.verticalAlign = 'bottom'
                setvertical('bottom')
                break
        }
        if (Object.keys(updateValues).length !== 0) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: { id: currentElement.id, ...updateValues },
            })
        }
    }

    return [current, setcurrent]
}
