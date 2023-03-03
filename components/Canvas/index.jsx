import { useRef } from 'react'

import useDraw from '@/utils/hooks/Editing/useDraw'

export default function Canvas() {
    const canvasRef = useRef(null)

    const canvasState = useDraw(canvasRef)

    return (
        <div className="w-full h-full flex justify-center items-center">
            <canvas
                className="bg-white"
                width={600}
                height={800}
                ref={canvasRef}
            ></canvas>
        </div>
    )
}
