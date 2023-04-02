import { createContext, useContext, useReducer, useRef, useState } from 'react'

import { canvasReducer, currentReducer } from '@/store/reducer/canvasReducer'

export const ExportContext = createContext(null)

export function useExportContext() {
    return useContext(ExportContext)
}

export const CanvasContext = createContext(null)

export function useCanvasContext() {
    return useContext(CanvasContext)
}

export const ExternalCanvasContext = createContext(null)

export function useExternalCanvasContext() {
    return useContext(ExternalCanvasContext)
}

export default function CanvasProvider({ children }) {
    //external canvas

    const [externalCurrent, externalCurrentDispatch] = useReducer(
        currentReducer,
        { id: null, values: null, update: false, add: false, delete: false }
    )

    // canvas items
    const [canvasItems, canvasItemsDispatch] = useReducer(canvasReducer, [])

    const [currentElement, currentElementDispatch] = useReducer(
        currentReducer,
        { id: null, values: null, add: false, update: false, delete: false }
    )

    //export
    const [canvas, setcanvas] = useState({ size: { w: 720, h: 720 } })
    const canvasRef = useRef(null)

    return (
        <ExportContext.Provider value={{ canvas, setcanvas, canvasRef }}>
            <CanvasContext.Provider
                value={{
                    canvasItems,
                    canvasItemsDispatch,
                    currentElement,
                    currentElementDispatch,
                }}
            >
                <ExternalCanvasContext.Provider
                    value={{ externalCurrent, externalCurrentDispatch }}
                >
                    {children}
                </ExternalCanvasContext.Provider>
            </CanvasContext.Provider>
        </ExportContext.Provider>
    )
}
