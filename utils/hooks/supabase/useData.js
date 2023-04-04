import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import supabase from 'supabase'

import { useAuthContext } from '@/store/context/providers/AuthProvider'
import {
    useCanvasContext,
    useExportContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

export default function useData() {
    const { auth } = useAuthContext()
    const { setcanvas } = useExportContext()
    const { canvasItemsDispatch, currentElementDispatch } = useCanvasContext()
    const { externalCurrentDispatch } = useExternalCanvasContext()

    const router = useRouter()

    const [designs, setdesigns] = useState([])
    const [templates, settemplates] = useState([])

    useEffect(() => {
        if (auth !== null) {
            fetchDesigns()
            fetchTemplates()
        }
    }, [auth])

    async function fetchDesigns() {
        const { data, error } = await supabase
            .from('design')
            .select()
            .eq('owner', auth?.id)
        if (!error) setdesigns(data)
    }

    async function fetchTemplates() {
        const { data, error } = await supabase.from('templates').select()
        if (!error) settemplates(data)
    }

    async function createDesignFromTemplate(template) {
        const { data, error } = await supabase
            .from('design')
            .insert({
                name: template.name,
                owner: auth?.id,
                editors: {
                    users: [{ id: auth?.id, type: 'owner' }],
                },
                image_settings: template.image_settings,
                canvas_items: template.canvas_items,
            })
            .select()

        if (!error) {
            setcanvas({
                size: {
                    w: data[0]?.image_settings?.width,
                    h: data[0]?.image_settings?.height,
                },
            })
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

    return { designs, templates, createDesignFromTemplate }
}
