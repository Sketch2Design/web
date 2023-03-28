import { useEffect, useMemo } from 'react'

import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CANVAS_ACTIONS, CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import Text from './Text'
import useText from '@/utils/hooks/Editing/Text/useText'
import { findTextScale } from '@/utils/helpers/canvas.helper'

export default function DrawTexts() {
    const {
        canvasItems,
        canvasItemsDispatch,
        currentElementDispatch,
        currentElement,
    } = useCanvasContext()
    const { elementDispatch } = useElementContext()

    function onChange(attr, id) {
        canvasItemsDispatch({
            type: CANVAS_ACTIONS.UPDATE,
            values: { id: id, ...attr },
        })
    }

    const text = useMemo(
        () =>
            canvasItems?.map((item) => {
                if (
                    item.main == 'Text' &&
                    item.id !== currentElement.values?.id
                ) {
                    return (
                        <Text
                            key={item.id}
                            textProps={item}
                            id={item.id}
                            events={{
                                onClick: () => {
                                    if (currentElement?.id !== item.id) {
                                        currentElementDispatch({
                                            type: CURRENT_ACTIONS.CHANGE,
                                            id: item.id,
                                            values: item.type,
                                        })
                                    }
                                },
                                onDragStart: () => {
                                    elementDispatch({
                                        type: ELEMENT_ACTIONS.RESET,
                                    })
                                    currentElementDispatch({
                                        type: CURRENT_ACTIONS.CHANGE,
                                        id: item.id,
                                        values: item.type,
                                    })
                                },
                                onDragEnd(e) {
                                    onChange(
                                        {
                                            x: parseInt(e.target.x()),
                                            y: parseInt(e.target.y()),
                                        },
                                        item.id
                                    )
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
                                    onChange(
                                        {
                                            x: parseInt(node.x()),
                                            y: parseInt(node.y()),
                                            width: Math.max(
                                                node.width() * scaleX,
                                                24
                                            ),
                                        },
                                        item.id
                                    )
                                },
                                onTransformEnd(e) {
                                    const node = e.target

                                    const { width, height, fontSize } =
                                        findTextScale(node)

                                    onChange(
                                        {
                                            x: parseInt(node.x()),
                                            y: parseInt(node.y()),
                                            width: width,
                                            height: height,
                                            fontSize: fontSize,
                                        },
                                        item.id
                                    )
                                },
                            }}
                        />
                    )
                }
            }),
        [canvasItems, currentElement]
    )

    return text
}
