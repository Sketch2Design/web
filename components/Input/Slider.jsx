import { forwardRef } from 'react'

const Slider = forwardRef(function Slider(
    { min = 0, max = 100, onChange, defaultValue },
    ref
) {
    console.log(ref?.current?.value)

    return (
        <input
            ref={ref}
            type="range"
            class="transparent h-1.5 w-6/12 cursor-pointer appearance-none rounded-lg border-transparent bg-zinc-50"
            min={min}
            max={max}
            defaultValue={10}
            onChange={onChange}
        />
    )
})

export default Slider
