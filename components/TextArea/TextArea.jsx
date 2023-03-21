import { forwardRef } from 'react'

const TextArea = forwardRef(function TextArea(
    { h, w, defaultValue, onTextChange },
    ref
) {
    return (
        <textarea
            ref={ref}
            className={`${h || 'h-32'} ${
                w || 'w-full'
            } resize-none justify-center rounded-lg border-2 border-transparent bg-zinc-800  px-2 font-bold outline-none hover:border-zinc-700
              focus:border-violet-600`}
            defaultValue={defaultValue}
            onChange={(e) => onTextChange(e.target.value)}
        />
    )
})
export default TextArea
