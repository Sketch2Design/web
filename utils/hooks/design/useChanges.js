import { useEffect } from 'react'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useChanges(ref) {
    const { currentElement, canvasItemsDispatch, currentElementDispatch } =
        useCanvasContext()

    const { externalCurrent, externalCurrentDispatch } =
        useExternalCanvasContext()

    // change canvas items on current update
    useEffect(() => {
        if (currentElement.update) {
            console.log(
                'INTERNAL: canvas update in current element values change'
            )
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: currentElement.values,
            })
        }
    }, [currentElement.values])
    useEffect(() => {
        if (currentElement.add) {
            console.log('INTERNAL: canvas add in current element add')
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.ADD,
                values: currentElement.values,
            })
        } else if (currentElement.delete) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.DELETE,
                id: currentElement.id,
            })
        }
    }, [currentElement.add])
    useEffect(() => {
        if (currentElement.delete) {
            console.log('INTERNAL: canvas delete in current element delete')
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.DELETE,
                id: currentElement.id,
            })
            const [node] = ref.current.find(`#${currentElement.id}`)
            node.destroy()
            currentElementDispatch({ type: CURRENT_ACTIONS.RESET })
        }
    }, [currentElement.delete])

    // change canvas items on external current update
    useEffect(() => {
        if (externalCurrent.update) {
            console.log(
                'EXTERNAL: canvas update in external current element values change'
            )
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: externalCurrent.values,
            })
        }
    }, [externalCurrent.values])
    useEffect(() => {
        if (externalCurrent.add) {
            console.log('EXTERNAL:canvas add in external current element add')
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.ADD,
                values: externalCurrent.values,
            })
        }
    }, [externalCurrent.add])
    useEffect(() => {
        if (externalCurrent.delete) {
            console.log(
                'EXTERNAL:canvas delete in external current element delete'
            )
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.DELETE,
                id: externalCurrent.id,
            })
            const [node] = ref.current.find(`#${externalCurrent.id}`)
            node.destroy()
            externalCurrentDispatch({ type: CURRENT_ACTIONS.RESET })
        }
    }, [externalCurrent.delete])
}
