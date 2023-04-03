import AuthProvider from './providers/AuthProvider'
import CanvasProvider from './providers/CanvasProvider'
import ElementProvider from './providers/ElementProvider'

export default function Context({ children }) {
    return (
        <AuthProvider>
            <CanvasProvider>
                <ElementProvider>{children}</ElementProvider>
            </CanvasProvider>
        </AuthProvider>
    )
}
