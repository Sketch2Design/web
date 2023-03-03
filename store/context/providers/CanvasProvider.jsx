import { createContext, useContext, useReducer } from 'react'

import { canvasReducer } from '@/store/reducer/canvasReducer'

export const CanvasContext = createContext(null)

export function useCanvasContext() {
    return useContext(CanvasContext)
}

export default function CanvasProvider({ children }) {
    // canvas items
    const [canvasItems, canvasItemsDispatch] = useReducer(canvasReducer, [])

    return (
        <CanvasContext.Provider value={{ canvasItems, canvasItemsDispatch }}>
            {children}
        </CanvasContext.Provider>
    )
}
