import Topbar from '@/model/Editing/Topbar'
import Sidebar from '@/model/Editing/Sidebar'

import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@/components/Canvas'), {
    ssr: false,
})

export default function EditingInterface() {
    return (
        <div className="w-screen h-screen flex flex-col p-4 space-y-4">
            <Topbar />
            <div className="flex justify-between space-x-4 w-full h-full">
                <Canvas />
                {/* <Sidebar /> */}
            </div>
        </div>
    )
}
