import { useState } from 'react'

import { TOPBAR_ITMES } from '@/utils/constants/editorInterface.constant'

import { BiImageAdd, BiRectangle } from 'react-icons/bi'
import { IoText } from 'react-icons/io5'

import Button from '@/components/Button/Button'
import Single from './Items/Single'
import Multiple from './Items/Multiple'

export default function Topbar() {
    const [current, setcurrent] = useState(null)

    return (
        <div className="bg-zinc-800 h-20  rounded-xl flex justify-between items-center px-6">
            <div className="flex space-x-8">
                <Multiple
                    id={0}
                    icon={<BiRectangle className="edit_topbar_icon" />}
                    values={TOPBAR_ITMES.SHAPES}
                    current={current}
                    name="Rectangle"
                    setcurrent={setcurrent}
                />
                <Single
                    id={1}
                    icon={<IoText className="edit_topbar_icon" />}
                    current={current}
                    name="Text"
                    setcurrent={setcurrent}
                />
                <Single
                    id={2}
                    icon={<BiImageAdd className="edit_topbar_icon" />}
                    current={current}
                    name="Image"
                    setcurrent={setcurrent}
                />
            </div>

            <div className="flex">
                <Button value="Export" />
            </div>
        </div>
    )
}
