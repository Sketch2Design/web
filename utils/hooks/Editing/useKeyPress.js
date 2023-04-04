import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useKeyPress() {
    const { currentElementDispatch, currentElement } = useCanvasContext()

    function handleKeyPress(e) {
        const key = e.key
        if (key == 'Delete' && currentElement.id !== null) {
            currentElementDispatch({ type: CURRENT_ACTIONS.DELETE })
        }
    }

    return handleKeyPress
}
