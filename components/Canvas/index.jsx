import { Layer, Stage } from 'react-konva'

import { useExportContext } from '@/store/context/providers/CanvasProvider'
import useDrawNode from '@/utils/hooks/Editing/useDrawNode'
import useKeyPress from '@/utils/hooks/Editing/useKeyPress'
import useDesign from '@/utils/hooks/supabase/useDesign'
import useSubscribe from '@/utils/hooks/supabase/useSubscribe'

import DrawShapes from './Shapes/DrawShapes'
import DrawTexts from './Texts/DrawTexts'

// todo
// implement layer context and canvas context to reduce re renders

export default function Canvas() {
    const { canvas, canvasRef } = useExportContext()

    const reset = useDrawNode(canvasRef)
    // const handleKeyPress = useKeyPress(canvasRef)
    useDesign()
    useSubscribe()

    return (
        <div
            className="absolute mr-40 flex h-full w-4/5 items-center justify-center outline-none "
            tabIndex={0}
            // onKeyDown={handleKeyPress}
        >
            <div
                className="relative flex items-center justify-center  "
                style={{ width: canvas?.size.w, height: canvas?.size.h }}
            >
                <Stage
                    ref={canvasRef}
                    className="bg-white"
                    width={canvas?.size.w}
                    height={canvas?.size.h}
                    onClick={() => {
                        reset()
                    }}
                >
                    <Layer width={canvas?.size.w} height={canvas?.size.h}>
                        <DrawShapes />
                        <DrawTexts />
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}
