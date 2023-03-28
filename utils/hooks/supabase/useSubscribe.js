import { useEffect } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS, CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { BROADCAST_EVENTS } from '@/utils/constants/editorInterface.constant'

export default function useSubscribe() {
    const { currentElement, currentElementDispatch, canvasItemsDispatch } =
        useCanvasContext()

    const { externalCurrent, externalCurrentDispatch } =
        useExternalCanvasContext()

    const router = useRouter()

    // change canvas items only after the current element changes to null or new element
    useEffect(() => {
        if (currentElement.update) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: currentElement.values,
            })
            currentElementDispatch({
                type: CURRENT_ACTIONS.RESET,
            })
        }
    }, [currentElement.update])

    useEffect(() => {
        if (externalCurrent.update && externalCurrent.id !== null) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.UPDATE,
                values: externalCurrent.values,
            })
            externalCurrentDispatch({
                type: CURRENT_ACTIONS.RESET,
            })
        }
    }, [externalCurrent.update])

    // ------------------------------------------------------------ send current node via broadcast -----------------------------------------------------------
    useEffect(() => {
        const id = router.query.designId
        const channel = supabase.channel(id + 'change', {
            config: {
                broadcast: {
                    ack: true,
                },
            },
        })

        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.CURRENT_NODE },
            (payload) => {
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.CHANGE,
                    id: payload?.payload?.id,
                    values: payload?.payload?.values,
                })
            }
        )
        channel.on('broadcast', { event: BROADCAST_EVENTS.RESET_NODE }, () => {
            console.log('reset')
            externalCurrentDispatch({ type: CURRENT_ACTIONS.FORCE })
        })

        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                console.log('current change')
                if (currentElement.id !== null) sendCurrentNode(channel)
                else if (currentElement.id === null) resetNode(channel)
            }
        })

        async function sendCurrentNode(channel) {
            const user = router.query?.user
            await channel.send({
                type: 'broadcast',
                event: BROADCAST_EVENTS.CURRENT_NODE,
                payload: {
                    user: user,
                    id: currentElement.id,
                    values: currentElement.values,
                },
            })
        }

        async function resetNode(channel) {
            await channel.send({
                type: 'broadcast',
                event: BROADCAST_EVENTS.RESET_NODE,
                payload: {
                    reset: true,
                },
            })
        }

        return () => {
            supabase.removeChannel(channel)
        }
    }, [currentElement.id])

    // canvas items changes
    useEffect(() => {
        const id = router.query.designId
        const channel = supabase.channel(id + ':update', {
            config: {
                broadcast: {
                    ack: true,
                },
            },
        })

        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.UPDATE_NODE },
            (payload) => {
                console.log('run dispatch')
                const values = payload.payload.values
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.UPDATE,
                    values: values,
                })
            }
        )

        channel.subscribe(async (status) => {
            const user = router.query?.user
            if (status === 'SUBSCRIBED') {
                await channel.send({
                    type: 'broadcast',
                    event: BROADCAST_EVENTS.UPDATE_NODE,
                    payload: {
                        user: user,
                        values: currentElement.values,
                    },
                })
            }
        })

        return () => {
            supabase.removeChannel(channel)
        }
    }, [currentElement.values])
}
