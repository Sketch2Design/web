import { useMemo } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'
import { findTextScale } from '@/utils/helpers/canvas.helper'

import Text from './Text'

export default function CurrentText() {
    const { currentElementDispatch, currentElement } = useCanvasContext()
    const { elementDispatch } = useElementContext()

    function onChange(attr) {
        currentElementDispatch({
            type: CURRENT_ACTIONS.UPDATE,
            values: attr,
        })
    }

    const text = useMemo(() => {
        const item = currentElement.values
        if (item.main === 'Text') {
            return (
                <Text
                    key={item.id}
                    textProps={item}
                    id={item.id}
                    events={{
                        onDragEnd(e) {
                            onChange({
                                x: parseInt(e.target.x()),
                                y: parseInt(e.target.y()),
                            })
                        },
                        onTransformStart() {
                            elementDispatch({
                                type: ELEMENT_ACTIONS.RESET,
                            })
                        },
                        onTransform(e) {
                            const node = e.target

                            const scaleX = node.scaleX()

                            node.scaleX(1)
                            node.scaleY(1)

                            // console.log(node.getTextWidth(), width)
                            onChange({
                                x: parseInt(node.x()),
                                y: parseInt(node.y()),
                                width: Math.max(node.width() * scaleX, 24),
                            })
                        },
                        onTransformEnd(e) {
                            const node = e.target

                            const { width, height, fontSize } =
                                findTextScale(node)

                            onChange({
                                x: parseInt(node.x()),
                                y: parseInt(node.y()),
                                width: width,
                                height: height,
                                fontSize: fontSize,
                            })
                        },
                    }}
                />
            )
        }
    }, [currentElement])

    return text
}
