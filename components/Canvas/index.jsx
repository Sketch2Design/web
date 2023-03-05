import { useRef } from 'react'
import { Layer, Stage } from 'react-konva'

import useDraw from '@/utils/hooks/Editing/useDraw'
import DrawShapes from './Shapes/DrawShapes'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

export default function Canvas() {
    const canvasRef = useRef(null)

    const canvasState = useDraw(canvasRef)

    const { canvas } = useCanvasContext()

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Stage
                ref={canvasRef}
                className="bg-white"
                width={canvas?.size.w}
                height={canvas?.size.h}
            >
                <Layer width={canvas?.size.w} height={canvas?.size.h}>
                    <DrawShapes />
                </Layer>
            </Stage>
        </div>
    )
}
