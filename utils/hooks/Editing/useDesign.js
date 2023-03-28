import { useRouter } from 'next/router'
import { useEffect } from 'react'
import supabase from 'supabase'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

let fetch = true

export default function useDesign() {
    const { canvasItems, canvasItemsDispatch } = useCanvasContext()

    const router = useRouter()

    // get design from database when page loads
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

    // -------------------------------------------------------------- update changes to database --------------------------------------------------------
    useEffect(() => {
        const ac = new AbortController()

        canvasItems.length !== 0 && updateCanvasItems(ac.signal)

        async function updateCanvasItems(signal) {
            console.log(canvasItems)
            const { data, error } = await supabase
                .from('design')
                .update({ canvas_items: { items: canvasItems } })
                .eq('id', router.query.designId)
                .abortSignal(signal)
        }

        return () => {
            ac.abort()
        }

        //canvasItems?.filter((item) => item.id == currentElement?.id)
    }, [canvasItems])
}
