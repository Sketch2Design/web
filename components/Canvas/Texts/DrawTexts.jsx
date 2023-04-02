import { useMemo } from 'react'

import {
    useCanvasContext,
    useExternalCanvasContext,
} from '@/store/context/providers/CanvasProvider'
import { useElementContext } from '@/store/context/providers/ElementProvider'
import { CURRENT_ACTIONS } from '@/store/reducer/canvasReducer'
import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

import Text from './Text'

export default function DrawTexts() {
    const { canvasItems, currentElementDispatch, currentElement } =
        useCanvasContext()
    const { externalCurrent } = useExternalCanvasContext()

    const { elementDispatch } = useElementContext()

    const text = useMemo(
        () =>
            canvasItems?.map((item) => {
                if (
                    item.main == 'Text' &&
                    item.id !== currentElement?.id &&
                    item.id !== externalCurrent?.id
                ) {
                    return (
                        <Text
                            key={item.id}
                            textProps={item}
                            id={item.id}
                            events={{
                                onClick: () => {
                                    currentElementDispatch({
                                        type: CURRENT_ACTIONS.CHANGE,
                                        id: item.id,
                                        values: item,
                                    })
                                },
                                onDragStart: () => {
                                    elementDispatch({
                                        type: ELEMENT_ACTIONS.RESET,
                                    })
                                    currentElementDispatch({
                                        type: CURRENT_ACTIONS.CHANGE,
                                        id: item.id,
                                        values: item,
                                    })
                                },
                            }}
                        />
                    )
                }
            }),
        [currentElement.id, externalCurrent.id, currentElement.initial]
    )

    return text
}
