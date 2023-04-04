import Link from 'next/link'

import { useElementContext } from '@/store/context/providers/ElementProvider'
import { useExportContext } from '@/store/context/providers/CanvasProvider'

import { TOPBAR_ITMES } from '@/utils/constants/editorInterface.constant'

import { BiImageAdd, BiRectangle } from 'react-icons/bi'
import { IoText } from 'react-icons/io5'

import Button from '@/components/Button/Button'
import Single from './Items/Single'
import Multiple from './Items/Multiple'

export default function Topbar() {
    const { element, elementDispatch } = useElementContext()
    const { canvasRef } = useExportContext()

    return (
        <div className="flex h-20  items-center justify-between rounded-xl bg-zinc-800 px-6">
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

            <div className="flex space-x-4">
                <Link href="/dashboard">
                    <Button value="Home" />
                </Link>
                <Button
                    value="Export"
                    onClick={() => {
                        const dataURL = canvasRef.current.toDataURL({
                            pixelRatio: 2,
                            mimeType: 'image/jpeg',
                            width: 720,
                            height: 720,
                        })
                        let link = document.createElement('a')
                        link.download = 'image.jpeg'
                        link.href = dataURL
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                    }}
                />
            </div>
        </div>
    )
}
