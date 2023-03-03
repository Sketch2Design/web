import SmallCard from '@/model/Workspace/Cards/SmallCard'
import AdminSidebar from '@/model/Workspace/Sidebar/AdminSidebar'

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex flex-col w-full space-y-4  ml-96 px-10 py-6">
                <h3 className="font-bold">Templates for Approval</h3>
                <div className="grid grid-cols-5 justify-items-center w-full gap-y-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (item) => (
                            <SmallCard key={item} />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
