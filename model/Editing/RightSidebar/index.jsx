import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import ShapeSidebar from './ShapeSideBar'
import TextSidebar from './TextSideBar'

export default function RightSidebar() {
    const { currentElement } = useCanvasContext()

    return (
        <div className="absolute right-0 flex h-full w-1/5 flex-col space-y-4  rounded-xl bg-zinc-800 py-4">
            {currentElement?.values?.main === 'Shapes' ? (
                <ShapeSidebar />
            ) : (
                currentElement?.values?.main === 'Text' && <TextSidebar />
            )}
        </div>
    )
}
