import { useEffect, useState } from 'react'

export default function useMouseMove(ref) {
    const [start, setstart] = useState({ x: -1, y: -1 })
    const [end, setend] = useState({ x: 1, y: 1 })

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
