import useData from '@/utils/hooks/supabase/useData'

import Skelton from '@/model/Workspace/Cards/Skelton'
import SmallCard from '@/model/Workspace/Cards/SmallCard'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'

export default function TemplatesPage() {
    const { templates, createDesignFromTemplate } = useData()

    return (
        <div div className="flex min-h-screen">
            <Sidebar />

            <div className="ml-96 flex w-full flex-col  space-y-4 px-10 py-6">
                <h3 className="font-bold">Trending Templates</h3>
                <div className="grid w-full grid-cols-5 justify-items-center gap-y-8">
                    {templates?.length === 0
                        ? [
                              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          ].map((item) => <Skelton key={item} />)
                        : templates?.map((item) => (
                              <SmallCard
                                  key={item?.id}
                                  image="./images/photo_icon.png"
                                  onClick={() => {
                                      createDesignFromTemplate(item)
                                  }}
                                  name={item?.name}
                              />
                          ))}
                </div>
            </div>
        </div>
    )
}
