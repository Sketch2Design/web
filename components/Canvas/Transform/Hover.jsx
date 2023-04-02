import { Rect } from 'react-konva'

export default function Hover({ hover }) {
    return (
        <>
            {hover.isHover ? (
                <Rect
                    width={hover.values.width}
                    height={hover.values.height}
                    x={hover.values.x}
                    y={hover.values.y}
                    fill="transparent"
                    stroke={hover.values?.stroke || '#810096'}
                    strokeWidth={3}
                />
            ) : (
                <></>
            )}
        </>
    )
}
