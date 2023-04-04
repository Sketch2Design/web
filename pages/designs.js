import Link from 'next/link'
import { useRouter } from 'next/router'

import useData from '@/utils/hooks/supabase/useData'

import Skelton from '@/model/Workspace/Cards/Skelton'
import SmallCard from '@/model/Workspace/Cards/SmallCard'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'
import Button from '@/components/Button/Button'

export default function template() {
    const router = useRouter()

    const { designs } = useData()

    const { canvasItemsDispatch, currentElementDispatch } = useCanvasContext()
    const { externalCurrentDispatch } = useExternalCanvasContext()

    return (
        <div div className="flex min-h-screen">
            <Sidebar />

            <div className="ml-96 flex w-full flex-col  space-y-4 px-10 py-6">
                <div className="flex w-full items-center justify-between pb-4">
                    <h3 className="font-bold">My Designs</h3>
                    <Link href="/create">
                        <Button value="Create a design" />
                    </Link>
                </div>
                <div className="grid w-full grid-cols-5 justify-items-center gap-y-8">
                    {designs?.length === 0
                        ? [
                              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          ].map((item) => <Skelton key={item} />)
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
        </div>
    )
}
