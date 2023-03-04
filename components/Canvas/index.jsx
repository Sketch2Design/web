import { useRef } from 'react'
import { Layer, Stage } from 'react-konva'

import useDraw from '@/utils/hooks/Editing/useDraw'
import DrawShapes from './Shapes/DrawShapes'

export default function Canvas() {
    const canvasRef = useRef(null)

    const canvasState = useDraw(canvasRef)

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Stage
                ref={canvasRef}
                className="bg-white"
                width={600}
                height={800}
            >
                <Layer width={600} height={800}>
                    <DrawShapes />
                </Layer>
            </Stage>
        </div>
    )
}
