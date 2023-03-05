import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react'

import { canvasReducer } from '@/store/reducer/canvasReducer'

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
    })
    const [canvas, setcanvas] = useState({ size: { w: 600, h: 800 } })

    return (
        <CanvasContext.Provider
            value={{
                canvasItems,
                canvasItemsDispatch,
                currentElement,
                setcurrentElement,
                canvas,
                setcanvas,
            }}
        >
            {children}
        </CanvasContext.Provider>
    )
}
