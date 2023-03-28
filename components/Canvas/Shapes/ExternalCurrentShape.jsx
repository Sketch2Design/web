import { useMemo } from 'react'

import { useExternalCanvasContext } from '@/store/context/providers/CanvasProvider'

import Rectangle from './Rectangle'
import Ellipse from './Ellipse'

const SHAPES = {
    Rectangle: Rectangle,
    Ellipse: Ellipse,
}

export default function ExternalCurrentShape() {
    const { externalCurrent } = useExternalCanvasContext()

    const shape = useMemo(() => {
        const item = externalCurrent.values
        const Shape = SHAPES[item?.type]
        return (
            <Shape
                key={item.id}
                shapeProps={{ ...item, listening: false }}
                id={item.id}
            />
        )
    }, [externalCurrent])

    return shape
}
