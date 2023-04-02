import { Layer, Stage } from 'react-konva'

import {
    useCanvasContext,
    useExportContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import useDrawNode from '@/utils/hooks/Editing/useDrawNode'
import useKeyPress from '@/utils/hooks/Editing/useKeyPress'
import useDesign from '@/utils/hooks/design/useDesign'
import useSubscribe from '@/utils/hooks/design/useSubscribe'
import useChanges from '@/utils/hooks/design/useChanges'

import DrawShapes from './Shapes/DrawShapes'
import DrawTexts from './Texts/DrawTexts'
import CurrentShape from './Shapes/CurrentShape'
import ExternalCurrentShape from './Shapes/ExternalCurrentShape'
import ExternalCurrentText from './Texts/ExternalCurrentText'
import CurrentText from './Texts/CurrentText'

export default function Canvas() {
    const { canvas, canvasRef } = useExportContext()
    const { currentElement } = useCanvasContext()
    const { externalCurrent } = useExternalCanvasContext()

    const reset = useDrawNode(canvasRef)
    const handleKeyPress = useKeyPress(canvasRef)
    useDesign()
    useSubscribe()
    useChanges(canvasRef)

    return (
        <div
            className="absolute mr-40 flex h-full w-4/5 items-center justify-center outline-none "
            tabIndex={0}
            onKeyDown={handleKeyPress}
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
                    {currentElement.id !== null && !currentElement.initial && (
                        <Layer width={canvas?.size.w} height={canvas?.size.h}>
                            <CurrentShape />
                            <CurrentText />
                        </Layer>
                    )}
                    {externalCurrent.id !== null && (
                        <Layer width={canvas?.size.w} height={canvas?.size.h}>
                            <ExternalCurrentShape />
                            <ExternalCurrentText />
                        </Layer>
                    )}
                </Stage>
            </div>
        </div>
    )
}
