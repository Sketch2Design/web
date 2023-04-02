import { useEffect } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { BROADCAST_EVENTS } from '@/utils/constants/editorInterface.constant'

export default function useSubscribe() {
    const { currentElement } = useCanvasContext()

    const { externalCurrentDispatch } = useExternalCanvasContext()

    const router = useRouter()

    // ------------------------------------------------------------ send current detials node via broadcast -----------------------------------------------------------
    useEffect(() => {
        const id = router.query.designId
        const channel = supabase.channel(id + ':change', {
            config: {
                broadcast: {
                    ack: true,
                },
            },
        })

        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.CHANGE_NODE },
            (payload) => {
                console.log('node change recieved')
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.CHANGE,
                    id: payload?.payload?.id,
                    values: payload?.payload?.values,
                })
            }
        )
        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.ADD_NODE },
            (payload) => {
                console.log('add new node recieved')
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.ADD,
                    id: payload?.payload?.id,
                    values: payload?.payload?.values,
                })
            }
        )
        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.DELETE_NODE },
            (payload) => {
                console.log('delete node recieved')
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.DELETE,
                })
            }
        )
        channel.on('broadcast', { event: BROADCAST_EVENTS.RESET_NODE }, () => {
            console.log('reset node recieved')
            externalCurrentDispatch({ type: CURRENT_ACTIONS.RESET })
        })

        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                if (currentElement.id !== null && currentElement.add)
                    addNewNode(channel)
                else if (currentElement.id !== null && currentElement.delete)
                    deleteNode(channel)
                else if (currentElement.id !== null && !currentElement.initial)
                    sendCurrentNode(channel)
                else if (currentElement.id === null) resetNode(channel)
            }
        })

        async function sendCurrentNode(channel) {
            const user = router.query?.user
            console.log('send current node')
            await channel.send({
                type: 'broadcast',
                event: BROADCAST_EVENTS.CHANGE_NODE,
                payload: {
                    user: user,
                    id: currentElement.id,
                    values: currentElement.values,
                },
            })
        }

        async function addNewNode(channel) {
            const user = router.query?.user
            console.log('send newly added node')
            await channel.send({
                type: 'broadcast',
                event: BROADCAST_EVENTS.ADD_NODE,
                payload: {
                    user: user,
                    id: currentElement.id,
                    values: currentElement.values,
                },
            })
        }

        async function deleteNode(channel) {
            const user = router.query?.user
            console.log('send deleted node')
            await channel.send({
                type: 'broadcast',
                event: BROADCAST_EVENTS.DELETE_NODE,
                payload: {
                    user: user,
                },
            })
        }

        async function resetNode(channel) {
            console.log('send reset node')
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

    // current element values change
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
                console.log('external element change recieved')
                const values = payload.payload.values
                externalCurrentDispatch({
                    type: CURRENT_ACTIONS.UPDATE,
                    values: values,
                })
            }
        )

        channel.subscribe(async (status) => {
            const user = router.query?.user
            if (status === 'SUBSCRIBED' && currentElement.values !== null) {
                console.log('external element changes send')
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
