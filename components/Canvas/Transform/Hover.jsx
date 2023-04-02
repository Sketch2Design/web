import { Rect } from 'react-konva'

export default function Hover({ hover }) {
    return (
        <>
            {hover.isHover ? (
                <Rect
                    width={hover.values.width + hover.values.strokeWidth}
                    height={hover.values.height + hover.values.strokeWidth}
                    x={hover.values.x - hover.values.strokeWidth / 2}
                    y={hover.values.y - hover.values.strokeWidth / 2}
                    fill="transparent"
                    stroke={hover.values.stroke}
                    strokeWidth={2}
                />
            ) : (
                <></>
            )}
        </>
    )
}
