import { useElementContext } from '@/store/context/providers/ElementProvider'

import { TOPBAR_ITMES } from '@/utils/constants/editorInterface.constant'

import { BiImageAdd, BiRectangle } from 'react-icons/bi'
import { IoText } from 'react-icons/io5'

import Button from '@/components/Button/Button'
import Single from './Items/Single'
import Multiple from './Items/Multiple'

export default function Topbar() {
    const { element, elementDispatch } = useElementContext()

    return (
        <div className="bg-zinc-800 h-20  rounded-xl flex justify-between items-center px-6">
            <div className="flex space-x-8">
                <Multiple
                    id={0}
                    icon={<BiRectangle className="edit_topbar_icon" />}
                    values={TOPBAR_ITMES.SHAPES}
                    current={element}
                    name="Shapes"
                    defaultSelected="Rectangle"
                    setcurrent={elementDispatch}
                />
                <Single
                    id={1}
                    icon={<IoText className="edit_topbar_icon" />}
                    current={element}
                    name="Text"
                    setcurrent={elementDispatch}
                />
                <Single
                    id={2}
                    icon={<BiImageAdd className="edit_topbar_icon" />}
                    current={element}
                    name="Image"
                    setcurrent={elementDispatch}
                />
            </div>

            <div className="flex">
                <Button value="Export" />
            </div>
        </div>
    )
}
