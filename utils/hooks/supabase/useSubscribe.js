import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'
import { BROADCAST_EVENTS } from '@/utils/constants/editorInterface.constant'
import { getCurrentElement } from '@/utils/helpers/canvas.helper'

export default function useSubscribe() {
    const { canvasItems, canvasItemsDispatch, currentElement } =
        useCanvasContext()

    const { externalCurrent, setexternalCurrent } = useExternalCanvasContext()

    const router = useRouter()

    // -------------------------------------------------------------- update changes to database --------------------------------------------------------
    useEffect(() => {
        const ac = new AbortController()

        canvasItems.length !== 0 && updateCanvasItems(ac.signal)

        return () => {
            ac.abort()
        }
    }, [canvasItems])

    async function updateCanvasItems(signal) {
        const { data, error } = await supabase
            .from('design')
            .update({ canvas_items: { items: canvasItems } })
            .eq('id', router.query.designId)
            .abortSignal(signal)
    }

    // ------------------------------------------------------------ send current node via broadcast -----------------------------------------------------------
    useEffect(() => {
        const id = router.query.designId
        const channel = supabase.channel(id, {
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
                setexternalCurrent(payload?.payload?.current)
            }
        )

        channel.on(
            'broadcast',
            { event: BROADCAST_EVENTS.UPDATE_NODE },
            (payload) => {
                const values = payload.payload.current
                const c = getCurrentElement(canvasItems, externalCurrent)

                if (JSON.stringify(c) !== JSON.stringify(values)) {
                    console.log('run dispatch')
                    canvasItemsDispatch({
                        type: CANVAS_ACTIONS.UPDATE,
                        values: {
                            id: externalCurrent,
                            ...values,
                        },
                    })
                }
            }
        )

        currentElement?.id !== null && sendCurrentNode(channel)

        function sendCurrentNode(channel) {
            const user = router.query?.user
            channel.subscribe(async (status) => {
                console.log('external')
                if (status === 'SUBSCRIBED') {
                    if (current !== externalCurrent) {
                        const c = getCurrentElement(
                            canvasItems,
                            currentElement.id
                        )
                        await channel.send({
                            type: 'broadcast',
                            event: BROADCAST_EVENTS.UPDATE_NODE,
                            payload: { current: c },
                        })
                    }
                    await channel.send({
                        type: 'broadcast',
                        event: BROADCAST_EVENTS.CURRENT_NODE,
                        payload: {
                            user: user,
                            current: currentElement?.id,
                        },
                    })
                }
            })
        }

        return () => {
            supabase.removeChannel(channel)
        }
        //canvasItems.filter((item) => item.id === externalCurrent)[0]
    }, [currentElement, canvasItems])
}
