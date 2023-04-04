import { useRouter } from 'next/router'

import useData from '@/utils/hooks/supabase/useData'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'

import Skelton from '@/model/Workspace/Cards/Skelton'
import SmallCard from '@/model/Workspace/Cards/SmallCard'
import Header from '@/model/Workspace/Dashboard/Header'
import MainCard from '@/model/Workspace/Dashboard/MainCard'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'

export default function Dashboard() {
    const router = useRouter()
    const { designs, templates, createDesignFromTemplate } = useData()
    const { canvasItemsDispatch, currentElementDispatch } = useCanvasContext()
    const { externalCurrentDispatch } = useExternalCanvasContext()

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="ml-96 flex w-full flex-col items-center space-y-4 px-10 py-6">
                <Header />
                <MainCard />
                <div className="flex w-full flex-col space-y-3 pt-4">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-2xl font-bold">Recent Designs</p>
                        <p className="text-base text-zinc-500">View more</p>
                    </div>
                    <div className="grid w-full grid-cols-5 justify-items-center gap-y-8">
                        {designs?.length === 0
                            ? [1, 2, 3, 4, 5].map((item) => (
                                  <Skelton key={item} />
                              ))
                            : designs?.map((item) => (
                                  <SmallCard
                                      key={item?.id}
                                      image="./images/photo_icon.png"
                                      onClick={() => {
                                          canvasItemsDispatch({
                                              type: CANVAS_ACTIONS.RESET,
                                          })
                                          currentElementDispatch({
                                              type: CURRENT_ACTIONS.RESET,
                                          })
                                          externalCurrentDispatch({
                                              type: CURRENT_ACTIONS.RESET,
                                          })

                                          router.push({
                                              pathname: '/edit/[designId]',
                                              query: { designId: item?.id },
                                          })
                                      }}
                                      name={item?.name}
                                  />
                              ))}
                    </div>
                </div>

                <div className="flex w-full flex-col space-y-3 pt-4">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-2xl font-bold">Trending Templates</p>
                        <p className="text-base text-zinc-500">View more</p>
                    </div>
                    <div className="grid w-full grid-cols-5 justify-items-center gap-y-8">
                        {templates?.length === 0
                            ? [1, 2, 3, 4, 5].map((item) => (
                                  <Skelton key={item} />
                              ))
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
        </div>
    )
}
