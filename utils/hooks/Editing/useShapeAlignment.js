import { useEffect, useMemo, useState } from 'react'

import {
    useCanvasContext,
    useExportContext,
} from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { SHAPES } from '@/utils/constants/editorInterface.constant'

export function useShapeAlignment(type) {
    const { currentElementDispatch, currentElement, canvasItems } =
        useCanvasContext()

    const { canvas } = useExportContext()

    const [current, setcurrent] = useState(null)

    const position = useMemo(() => {
        if (currentElement.id !== null) {
            const lt =
                currentElement.values?.type == SHAPES.ELLIPSE
                    ? 0 +
                      currentElement.values?.width / 2 +
                      currentElement.values?.strokeWidth / 2
                    : 0 + currentElement.values?.strokeWidth / 2
            const right =
                currentElement.values?.type == SHAPES.ELLIPSE
                    ? canvas.size.w -
                      currentElement.values?.width / 2 -
                      currentElement.values?.strokeWidth / 2
                    : canvas.size.w -
                      currentElement.values?.width -
                      currentElement.values?.strokeWidth / 2
            const center =
                currentElement.values?.type == SHAPES.ELLIPSE
                    ? canvas.size.w / 2
                    : right / 2
            const bottom =
                currentElement.values?.type == SHAPES.ELLIPSE
                    ? canvas.size.h -
                      currentElement.values?.width / 2 -
                      currentElement.values?.strokeWidth / 2
                    : canvas.size.h -
                      currentElement.values?.height -
                      currentElement.values?.strokeWidth / 2
            const middle =
                currentElement.values?.type == SHAPES.ELLIPSE
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

    function checkAlignment() {
        if (type == 'horizontal') {
            if (currentElement.values?.x == position.left) {
                if (current == 'left') return
                setcurrent('left')
            } else if (currentElement.values?.x == position.right) {
                if (current == 'right') return
                setcurrent('right')
            } else if (currentElement.values?.x == position.center) {
                if (current == 'center') return
                setcurrent('center')
            } else setcurrent(null)
        } else if (type == 'vertical') {
            if (currentElement.values?.y == position.top) {
                if (current == 'top') return
                setcurrent('top')
            } else if (currentElement.values?.y == position.bottom) {
                if (current == 'bottom') return
                setcurrent('bottom')
            } else if (currentElement.values?.y == position.middle) {
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
            currentElementDispatch({
                type: CURRENT_ACTIONS.UPDATE,
                values: updateValues,
            })
        }
    }

    return [current, setcurrent]
}
