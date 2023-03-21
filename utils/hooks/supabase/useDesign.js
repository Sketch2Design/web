import { useRouter } from 'next/router'
import { useEffect } from 'react'
import supabase from 'supabase'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

let fetch = true

export default function useDesign() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const router = useRouter()

    useEffect(() => {
        if (fetch) {
            getCanvasItems()
            fetch = false
        }
    }, [])

    async function getCanvasItems() {
        const { data, error } = await supabase
            .from('design')
            .select('canvas_items')
            .eq('id', router.query.designId)
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.ADD_ALL,
            values: data[0].canvas_items.items,
        })
    }

    useEffect(() => {
        const ac = new AbortController()

        canvasItems.length !== 0 && updateCanvasItems(ac.signal)

        return () => {
            ac.abort()
        }
    }, [canvasItems.filter((item) => item.id === currentElement.id)[0]])

    async function updateCanvasItems(signal) {
        const { data, error } = await supabase
            .from('design')
            .update({ canvas_items: { items: canvasItems } })
            .eq('id', router.query.designId)
            .abortSignal(signal)
    }

    // broadcast current active node
    useEffect(() => {
        sendCurrentNode()
    }, [currentElement])

    function sendCurrentNode() {
        const id = router.query.designId
        const user = router.query.user

        const channel = supabase.channel(id)
        channel.subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                channel.send({
                    type: 'broadcast',
                    event: 'current_node',
                    payload: { user: user, current: currentElement.id },
                })
            }
        })
    }
}
