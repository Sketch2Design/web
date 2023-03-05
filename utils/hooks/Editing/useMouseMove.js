import { useEffect, useState } from 'react'

export default function useMouseMove(ref) {
    const [start, setstart] = useState(null)
    const [end, setend] = useState(null)

    useEffect(() => {
        function handleMouseDown(e) {
            setstart({ x: e.offsetX, y: e.offsetY })
            setend(null)
        }

        function handleMouseUp(e) {
            setend({ x: e.offsetX, y: e.offsetY })
        }

        const canvas = ref.current
        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mouseup', handleMouseUp)

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return [start, end]
}
