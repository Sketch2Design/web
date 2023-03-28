import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { SHAPES } from '@/utils/constants/editorInterface.constant'

export default function drawShape(
    ref,
    element,
    canvasItemsDispatch,
    start,
    end
) {
    if (element?.value == SHAPES.RECTANGLE) {
        const ctx = drawRect(ref, {
            x: start.x,
            y: start.y,
            w: end.x - start.x,
            h: end.y - start.y,
        })
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.ADD,
            values: {
                main: element.main,
                value: element.value,
                sx: start.x,
                sy: start.y,
                ex: end.x,
                ey: end.y,
                w: Math.abs(end.x - start.x),
                h: Math.abs(end.y - start.y),
                current: true,
                ctx: ctx,
            },
        })
    }
}

function drawRect(ref, { x, y, w, h }, color = 'black') {
    const ctx = ref.current.getContext('2d')
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)

    return ctx
}
