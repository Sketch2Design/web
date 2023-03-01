import SmallCard from '@/model/Workspace/Cards/SmallCard'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'
export default function template() {
    return (
        <div div className="flex min-h-screen">
            <Sidebar />
            
            <div className="flex flex-col w-full space-y-4  ml-96 px-10 py-6">
                <h3 className="font-bold">Trending Templates</h3>
                <div className="grid grid-cols-5 justify-items-center w-full gap-y-8">
                    {[1, 2, 3, 4,5, 6, 7 ,8,9 ,10, 11 ,12 , 13, 14, 15].map((item) => (
                        <SmallCard key={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
