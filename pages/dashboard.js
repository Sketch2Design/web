import SmallCard from '@/model/Workspace/Cards/SmallCard'
import Header from '@/model/Workspace/Dashboard/Header'
import MainCard from '@/model/Workspace/Dashboard/MainCard'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'

export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col w-full space-y-4 items-center ml-96 px-10 py-6">
                <Header />
                <MainCard />
                <div className="flex flex-col space-y-3 w-full pt-4">
                    <div className="flex justify-between items-center w-full">
                        <p className="font-bold text-2xl">Recent Designs</p>
                        <p className="text-base text-zinc-500">View more</p>
                    </div>
                    <div className="grid grid-cols-5 justify-items-center w-full gap-y-8">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <SmallCard key={item} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-3 w-full pt-4">
                    <div className="flex justify-between items-center w-full">
                        <p className="font-bold text-2xl">Trending Templates</p>
                        <p className="text-base text-zinc-500">View more</p>
                    </div>
                    <div className="grid grid-cols-5 justify-items-center w-full gap-y-8">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <SmallCard key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
