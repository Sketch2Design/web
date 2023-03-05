import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import ShapeSidebar from './ShapeSideBar'

export default function RightSidebar() {
    const { currentElement } = useCanvasContext()

    return (
        <div className="flex flex-col w-3/12 bg-zinc-800 min-h-full rounded-xl p-4 space-y-4">
            {currentElement.type === 'Shapes' && <ShapeSidebar />}
        </div>
    )
}
