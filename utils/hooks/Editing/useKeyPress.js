import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useKeyPress(ref) {
    const { canvasItemsDispatch, currentElement, setcurrentElement } =
        useCanvasContext()

    function handleKeyPress(e) {
        // console.log(ref.current.find(`#${currentElement.id}`))
        const key = e.key
        if (key == 'Delete') {
            const [node] = ref.current.find(`#${currentElement.id}`)
            setcurrentElement({ id: null, type: null, value: null })
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.DELETE,
                values: { id: currentElement.id },
            })
            node.destroy()
        }
    }

    return handleKeyPress
}
