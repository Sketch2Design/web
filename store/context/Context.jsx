import CanvasProvider from './providers/CanvasProvider'
import ElementProvider from './providers/ElementProvider'

export default function Context({ children }) {
    return (
        <CanvasProvider>
            <ElementProvider>{children}</ElementProvider>
        </CanvasProvider>
    )
}
