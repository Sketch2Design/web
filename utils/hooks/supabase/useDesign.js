import { useRouter } from 'next/router'
import { useEffect } from 'react'
import supabase from 'supabase'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

let fetch = true

export default function useDesign() {
    const { canvasItemsDispatch } = useCanvasContext()

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
}
