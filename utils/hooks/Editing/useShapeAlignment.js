import { useEffect, useMemo, useState } from 'react'

import {
    useCanvasContext,
    useExportContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'
import { SHAPES } from '@/utils/constants/editorInterface.constant'

export function useShapeAlignment(type) {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const { canvas } = useExportContext()

    const [current, setcurrent] = useState(null)

    const position = useMemo(() => {
        const c = getCurrentElement(canvasItems, currentElement.id)
        if (c !== null) {
            const lt =
                currentElement.value == SHAPES.ELLIPSE
                    ? 0 + c.width / 2 + c.strokeWidth / 2
                    : 0 + c.strokeWidth / 2
            const right =
                currentElement.value == SHAPES.ELLIPSE
                    ? canvas.size.w - c.width / 2 - c.strokeWidth / 2
                    : canvas.size.w - c.width - c.strokeWidth / 2
            const center =
                currentElement.value == SHAPES.ELLIPSE
                    ? canvas.size.w / 2
                    : right / 2
            const bottom =
                currentElement.value == SHAPES.ELLIPSE
                    ? canvas.size.h - c.width / 2 - c.strokeWidth / 2
                    : canvas.size.h - c.height - c.strokeWidth / 2
            const middle =
                currentElement.value == SHAPES.ELLIPSE
                    ? canvas.size.h / 2
                    : bottom / 2
            return {
                left: lt,
                right: right,
                center: center,
                top: lt,
                bottom: bottom,
                middle: middle,
            }
        }
    }, [currentElement, canvasItems])

    useEffect(() => {
        handleAlignment()
    }, [current])

    useEffect(() => {
        currentElement.id !== null && checkAlignment()
    }, [currentElement])

    useEffect(() => {
        canvasItems?.length > 0 && checkAlignment()
    }, [canvasItems])

    function checkAlignment() {
        const c = getCurrentElement(canvasItems, currentElement.id)
        if (type == 'horizontal') {
            if (c.x == position.left) {
                if (current == 'left') return
                setcurrent('left')
            } else if (c.x == position.right) {
                if (current == 'right') return
                setcurrent('right')
            } else if (c.x == position.center) {
                if (current == 'center') return
                setcurrent('center')
            } else setcurrent(null)
        } else if (type == 'vertical') {
            if (c.y == position.top) {
                if (current == 'top') return
                setcurrent('top')
            } else if (c.y == position.bottom) {
                if (current == 'bottom') return
                setcurrent('bottom')
            } else if (c.y == position.middle) {
                if (current == 'middle') return
                setcurrent('middle')
            } else setcurrent(null)
        }
    }

    function handleAlignment() {
        let updateValues = {}
        if (type == 'horizontal') {
            switch (current) {
                case 'left':
                    updateValues.x = position.left
                    break
                case 'center':
                    updateValues.x = position.center
                    break
                case 'right':
                    updateValues.x = position.right
                    break
            }
        } else if (type == 'vertical') {
            switch (current) {
                case 'top':
                    updateValues.y = position.top
                    break
                case 'middle':
                    updateValues.y = position.middle
                    break
                case 'bottom':
                    updateValues.y = position.bottom
                    break
            }
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
