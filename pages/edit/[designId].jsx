import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Topbar from '@/model/Editing/Topbar'
import RightSidebar from '@/model/Editing/RightSidebar'

const Canvas = dynamic(() => import('@/components/Canvas'), {
    ssr: false,
})

export default function EditingInterface() {
    return (
        <div className="flex h-screen max-h-screen w-screen flex-col space-y-4 overflow-hidden p-4">
            <Topbar />
            <div className="relative flex h-full w-full">
                <Suspense fallback={<div>Loading...</div>}>
                    <Canvas />
                </Suspense>
                <RightSidebar />
            </div>
        </div>
    )
}
