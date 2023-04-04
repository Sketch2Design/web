import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import supabase from 'supabase'

import { useAuthContext } from '@/store/context/providers/AuthProvider'
import {
    useCanvasContext,
    useExportContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'

import LabelInput from '@/components/Input/LabelInput'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function CreatePage() {
    const router = useRouter()

    const { setcanvas } = useExportContext()
    const { auth } = useAuthContext()
    const { canvasItemsDispatch, currentElementDispatch } = useCanvasContext()
    const { externalCurrentDispatch } = useExternalCanvasContext()

    const nameRef = useRef(null)
    const widthRef = useRef(null)
    const heightRef = useRef(null)

    const [loading, setloading] = useState(false)

    async function createDesign() {
        setloading(true)
        const { data, error } = await supabase
            .from('design')
            .insert({
                name: nameRef.current.value,
                owner: auth?.id,
                editors: {
                    users: [{ id: auth?.id, type: 'owner' }],
                },
                image_settings: {
                    width: widthRef.current.value,
                    height: heightRef.current.value,
                },
            })
            .select()
        setloading(false)
        setcanvas({
            size: {
                w: widthRef.current.value,
                h: heightRef.current.value,
            },
        })

        if (!error) {
            canvasItemsDispatch({
                type: CANVAS_ACTIONS.RESET,
            })
            currentElementDispatch({
                type: CURRENT_ACTIONS.RESET,
            })
            externalCurrentDispatch({
                type: CURRENT_ACTIONS.RESET,
            })
            router.push({
                pathname: '/edit/[designId]',
                query: { designId: data[0]?.id },
            })
        }
    }

    return (
        <div className="flex min-h-screen  items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 py-10 px-20">
                <h1 className="pt-4 pb-8 font-bold">Create a new Design </h1>
                <div className="flex flex-col space-y-6">
                    <LabelInput
                        type="text"
                        name="design_name"
                        placeholder="Design Name"
                        ref={nameRef}
                    />
                    <LabelInput
                        type="number"
                        name="width"
                        placeholder="Width"
                        ref={widthRef}
                    />
                    <LabelInput
                        type="number"
                        name="height"
                        placeholder="Height"
                        ref={heightRef}
                    />
                    <button
                        className="h-14 w-80 rounded-xl border-2 border-transparent bg-zinc-100 text-xl font-bold text-zinc-900
                         hover:border-white hover:bg-transparent hover:text-white"
                        onClick={createDesign}
                    >
                        {loading ? 'Creating...' : 'Create'}
                    </button>
                </div>
            </div>
        </div>
    )
}
