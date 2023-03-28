import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useKeyPress(ref) {
    const { canvasItemsDispatch, currentElement, currentElementDispatch } =
        useCanvasContext()

    function handleKeyPress(e) {
        // console.log(ref.current.find(`#${currentElement.id}`))
        const key = e.key
        if (key == 'Delete') {
            const [node] = ref.current.find(`#${currentElement.id}`)
            currentElementDispatch({ type: CURRENT_ACTIONS.RESET })
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.DELETE,
                values: { id: currentElement.id },
            })
            node.destroy()
        }
    }

    return handleKeyPress
}
