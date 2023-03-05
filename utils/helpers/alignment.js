import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export function handleClick({
    name,
    type,
    current,
    setcurrent,
    canvasItems,
    canvasItemsDispatch,
}) {
    setcurrent(current)
    let updateValues = {}
    switch (name) {
        case 'layout': {
            if (type == 'horizontal') {
                switch (current) {
                    case 'left':
                        updateValues.sx = 0
                        break
                    case 'center':
                        updateValues.sx =
                            canvas.size.w / 2 -
                            canvasItems[currentElement.id - 1].w / 2
                        break
                    case 'right':
                        updateValues.sx =
                            canvas.size.w - canvasItems[currentElement.id - 1].w
                        break
                }
            } else if (type == 'vertical') {
                switch (current) {
                    case 'top':
                        updateValues.sy = 0
                        break
                    case 'middle':
                        updateValues.sy =
                            canvas.size.h / 2 -
                            canvasItems[currentElement.id - 1].h / 2
                        break
                    case 'bottom':
                        updateValues.sy =
                            canvas.size.h - canvasItems[currentElement.id - 1].h
                        break
                }
            }
        }
    }
    canvasItemsDispatch({
        type: CANVAS_ACTIONS.UPDATE,
        values: { id: currentElement.id, ...updateValues },
    })
}
