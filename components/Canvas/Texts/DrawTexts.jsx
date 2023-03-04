import { useCanvasContext } from '@/store/context/providers/CanvasProvider'
import { CANVAS_ACTIONS } from '@/store/reducer/canvasReducer'

import Text from './Text'

export default function DrawTexts() {
    const {
        canvasItems,
        canvasItemsDispatch,
        currentElement,
        setcurrentElement,
    } = useCanvasContext()

    return (
        <>
            {canvasItems?.map(
                (item) =>
                    item.value == 'Text' && (
                        <Text
                            key={item.id}
                            shapeProps={item}
                            isSelected={item.id === currentElement}
                            onSelect={() => {
                                setcurrentElement(item.id)
                            }}
                            onChange={(newAttrs) => {
                                canvasItemsDispatch({
                                    type: CANVAS_ACTIONS.UPDATE,
                                    values: { id: item.id, ...newAttrs },
                                })
                            }}
                        />
                    )
            )}
        </>
    )
}
