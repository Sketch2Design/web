import { createContext, useContext, useReducer, useRef, useState } from 'react'

import { canvasReducer } from '@/store/reducer/canvasReducer'

export const ExportContext = createContext(null)

export function useExportContext() {
    return useContext(ExportContext)
}

export const CanvasContext = createContext(null)

export function useCanvasContext() {
    return useContext(CanvasContext)
}

export default function CanvasProvider({ children }) {
    // canvas items
    const [canvasItems, canvasItemsDispatch] = useReducer(canvasReducer, [])

    const [currentElement, setcurrentElement] = useState({
        id: null,
        type: null,
        value: null,
    })
    const [editText, seteditText] = useState({
        id: null,
    })

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
                    setcurrentElement,
                    editText,
                    seteditText,
                }}
            >
                {children}
            </CanvasContext.Provider>
        </ExportContext.Provider>
    )
}
