import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useSubscribe() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [current, setcurrent] = useState({ id: null, user: null })

    const router = useRouter()

    useEffect(() => {
        getDesignChanges()
    }, [])

    function getDesignChanges() {
        const id = router.query.designId
        const databaseFilter = {
            schema: 'public',
            table: 'design',
            // filter: `id=eq.${id}`,
            event: '*',
        }
        supabase
            .channel(id)
            .on('postgres_changes', databaseFilter, (payload) => {
                console.log(payload)
                // canvasItemsDispatch({
                //     type: CANVAS_ACTIONS.UPDATE,
                //     values: { id: current.id, values: paylo },
                // })
            })
            .subscribe()
    }

    // get current node via broadcase
    useEffect(() => {
        getCurrentNode()
    }, [])

    function getCurrentNode() {
        console.log('change')
        const id = router.query.designId
        supabase
            .channel(id)
            .on('broadcast', { event: 'current_node' }, (data) => {
                console.log(data)
                setcurrent(data.payload)
            })
            .subscribe()
    }
}
