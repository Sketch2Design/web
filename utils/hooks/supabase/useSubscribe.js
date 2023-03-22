import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { BROADCAST_EVENTS } from '@/utils/constants/editorInterface.constant'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'

export default function useSubscribe() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const [current, setcurrent] = useState({ id: null, user: null })

    const router = useRouter()

    // -------------------------------------------------------------- update changes to database --------------------------------------------------------
    useEffect(() => {
        const ac = new AbortController()

        canvasItems.length !== 0 && updateCanvasItems(ac.signal)

        return () => {
            ac.abort()
        }
    }, [canvasItems])
    //canvasItems.filter((item) => item.id === currentElement.id)[0]

    async function updateCanvasItems(signal) {
        const { data, error } = await supabase
            .from('design')
            .update({ canvas_items: { items: canvasItems } })
            .eq('id', router.query.designId)
            .abortSignal(signal)
    }

    // ------------------------------------------------------------ send current node via broadcast -----------------------------------------------------------
    useEffect(() => {
        console.log('send current node')
        const id = router.query.designId
        const channel = supabase.channel(id, {
            config: {
                broadcast: {
                    ack: true,
                },
            },
        })
        sendCurrentNode(channel)
        return () => {
            supabase.removeChannel(channel)
        }
    }, [currentElement])

    function sendCurrentNode(channel) {
        const user = router.query?.user

        channel.subscribe(async (status) => {
            console.log(status)
            if (status === 'SUBSCRIBED') {
                const resp = await channel.send({
                    type: 'broadcast',
                    event: BROADCAST_EVENTS.CURRENT_NODE,
                    payload: { user: user, current: currentElement.id },
                })
                console.log('response current node', resp)
            }
        })
    }

    // ------------------------------------------------------------ get current node via broadcast -----------------------------------------------------------
    useEffect(() => {
        console.log('get current node')
        const id = router.query.designId
        const channel = supabase.channel(id)
        getCurrentNode(channel)
        return () => {
            supabase.removeChannel(channel)
        }
    }, [])

    function getCurrentNode(channel) {
        const id = router.query.designId
        channel
            .on(
                'broadcast',
                { event: BROADCAST_EVENTS.CURRENT_NODE },
                (payload) => {
                    console.log(payload)
                    // setcurrent(payload.payload)
                }
            )
            .subscribe()
    }

    // ------------------------------------------------------------ send node changes via broadcast -----------------------------------------------------------
    useEffect(() => {
        console.log('send node changes')
        const id = router.query.designId
        const channel = supabase.channel(id, {
            config: {
                broadcast: {
                    ack: true,
                },
            },
        })
        sendNodeChanges(channel)
        return () => {
            supabase.removeChannel(channel)
        }
    }, [canvasItems])

    function sendNodeChanges(channel) {
        const user = router.query?.user

        channel.subscribe(async (status) => {
            console.log(status)
            if (status === 'SUBSCRIBED') {
                const c = getCurrentElement(canvasItems, currentElement.id)
                const resp = await channel.send({
                    type: 'broadcast',
                    event: BROADCAST_EVENTS.UPDATE_NODE,
                    payload: { user: user, current: c },
                })
                console.log('response node changes: ', resp)
            }
        })
    }

    // ------------------------------------------------------------ get canvas node changes via broadcast -----------------------------------------------------------
    useEffect(() => {
        console.log('get canvas node chnages')
        const id = router.query.designId
        const channel = supabase.channel(id)
        getNodeChanges(channel)
        return () => {
            supabase.removeChannel(channel)
        }
    }, [])

    function getNodeChanges(channel) {
        channel
            .on(
                'broadcast',
                { event: BROADCAST_EVENTS.UPDATE_NODE },
                (payload) => {
                    console.log(payload)
                    canvasItemsDispatch({
                        type: CANVAS_ACTIONS.UPDATE,
                        values: {
                            id: payload.payload.current.id,
                            fill: payload.payload.current,
                        },
                    })
                }
            )
            .subscribe()
    }
}

// useEffect(() => {
//     const id = router.query.designId
//     const channel = supabase.channel(id)
//     getDesignChanges(channel, id)
//     return () => {
//         supabase.removeChannel(channel)
//     }
// }, [])

// function getDesignChanges(channel, id) {
//     channel
//         .on(
//             'postgres_changes',
//             {
//                 event: 'UPDATE',
//                 schema: 'public',
//                 table: 'design',
//                 filter: `id=eq.${id}`,
//             },
//             (payload) => {
//                 console.log(payload)
//                 canvasItemsDispatch({
//                     type: CANVAS_ACTIONS.UPDATE,
//                     values: {
//                         id: null,
//                         values: payload.new.canvas_items.items,
//                     },
//                 })
//             }
//         )
//         .subscribe((status) => {
//             console.log(status)
//         })
// }
