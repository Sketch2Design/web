import { createContext, useContext, useReducer } from 'react'

import { elementReducer } from '@/store/reducer/elementReducer'

export const ElementContext = createContext(null)

export function useElementContext() {
    return useContext(ElementContext)
}

export default function ElementProvider({ children }) {
    // get the selected element like shape, text or imge
    const [element, elementDispatch] = useReducer(elementReducer, {
        id: null,
        main: null,
        value: null,
    })

    return (
        <ElementContext.Provider value={{ element, elementDispatch }}>
            {children}
        </ElementContext.Provider>
    )
}
