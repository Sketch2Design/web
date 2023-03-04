import { forwardRef, useEffect, useRef } from 'react'
import { Transformer } from 'react-konva'

const Transform = forwardRef(function Transform({ isSelected }, ref) {
    const tRef = useRef(null)

    useEffect(() => {
        if (isSelected) {
            tRef.current.nodes([ref.current])
            tRef.current.getLayer().batchDraw()
        }
    }, [isSelected])

    return (
        <>
            <Transformer
                ref={tRef}
                rotationSnaps={[0, 45, 90, 135, 180]}
                rotateAnchorOffset={70}
                borderStroke="#810096"
                anchorFill="#e4e4e4"
                anchorStroke="transparent"
                anchorCornerRadius={7}
                boundBoxFunc={(oldBox, newBox) => {
                    if (newBox.width < 20 || newBox.height < 20) {
                        return oldBox
                    }
                    return newBox
                }}
            />
        </>
    )
})

export default Transform
