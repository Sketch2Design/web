import Topbar from '@/model/Editing/Topbar'
import Sidebar from '@/model/Editing/Sidebar'

export default function EditingInterface() {
    return (
        <div className="w-screen h-screen flex flex-col p-4 space-y-4">
            <Topbar />
            <div className="flex w-full h-full">
                <div className="w-full"></div>
                <Sidebar />
            </div>
        </div>
    )
}
