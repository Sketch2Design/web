import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { useEffect, useState } from 'react'

export function useShapeAlignment(type) {
    const { canvasItems, canvasItemsDispatch, currentElement, canvas } =
        useCanvasContext()

    const [current, setcurrent] = useState(null)

    const left = 0
    const right = canvas.size.w - canvasItems[currentElement.id - 1].w
    const center = right / 2
    const top = 0
    const bottom = canvas.size.h - canvasItems[currentElement.id - 1].h
    const middle = bottom / 2

    useEffect(() => {
        handleAlignment()
    }, [current])

    useEffect(() => {
        checkAlignment()
    }, [currentElement])

    useEffect(() => {
        checkAlignment()
    }, [canvasItems])

    function checkAlignment() {
        console.log(currentElement)
        console.log(type, '->>', canvasItems[currentElement.id - 1])
        if (type == 'horizontal') {
            if (canvasItems[currentElement.id - 1].sx == left) {
                if (current == 'left') return
                setcurrent('left')
            } else if (canvasItems[currentElement.id - 1].sx == right) {
                if (current == 'right') return
                setcurrent('right')
            } else if (canvasItems[currentElement.id - 1].sx == center) {
                if (current == 'center') return
                setcurrent('center')
            } else setcurrent(null)
        } else if (type == 'vertical') {
            if (canvasItems[currentElement.id - 1].sy == top) {
                if (current == 'top') return
                setcurrent('top')
            } else if (canvasItems[currentElement.id - 1].sy == bottom) {
                if (current == 'bottom') return
                setcurrent('bottom')
            } else if (canvasItems[currentElement.id - 1].sy == middle) {
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
                    updateValues.sx = left
                    break
                case 'center':
                    updateValues.sx = center
                    break
                case 'right':
                    updateValues.sx = right
                    break
            }
        } else if (type == 'vertical') {
            switch (current) {
                case 'top':
                    updateValues.sy = top
                    break
                case 'middle':
                    updateValues.sy = middle
                    break
                case 'bottom':
                    updateValues.sy = bottom
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
