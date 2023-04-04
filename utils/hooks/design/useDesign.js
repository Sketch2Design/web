import { useRouter } from 'next/router'
import { useEffect } from 'react'
import supabase from 'supabase'

import {
    useCanvasContext,
    useExportContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useDesign() {
    const { canvasItems, canvasItemsDispatch, currentElementDispatch } =
        useCanvasContext()

    const { setcanvas } = useExportContext()

    const router = useRouter()

    // get design from database when page loads
    useEffect(() => {
        getCanvasItems()
    }, [])

    async function getCanvasItems() {
        console.log(router.query.designId)
        const { data, error } = await supabase
            .from('design')
            .select()
            .eq('id', router.query.designId)
        if (!error && data[0]?.canvas_items?.items?.length > 0) {
            const values = data[0].canvas_items.items
            const size = data[0].image_settings
            setcanvas({ size: { w: size.width, h: size.height } })
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.ADD_ALL,
                values: values,
            })
            currentElementDispatch({
                type: CURRENT_ACTIONS.INITIAL,
            })
        }
    }

    // -------------------------------------------------------------- update changes to database --------------------------------------------------------
    useEffect(() => {
        const ac = new AbortController()

        canvasItems.length !== 0 && updateCanvasItems(ac.signal)

        async function updateCanvasItems(signal) {
            const { data, error } = await supabase
                .from('design')
                .update({ canvas_items: { items: canvasItems } })
                .eq('id', router.query.designId)
                .abortSignal(signal)
        }

        return () => {
            ac.abort()
        }
    }, [canvasItems])
}
