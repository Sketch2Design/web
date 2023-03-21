import { forwardRef } from 'react'

const EditableInput = forwardRef(function EditableInput(
    { defaultValue, onChange, type, h, w },
    ref
) {
    return (
        <input
            ref={ref}
            type={type || 'text'}
            className={`${h || 'h-8'} ${
                w || 'w-5/12'
            } justify-center rounded-lg border-2 border-transparent bg-transparent  px-2 font-bold outline-none hover:border-zinc-700
              focus:border-violet-600`}
            maxLength={6}
            value={defaultValue ?? ''}
            onFocus={(e) => e.target.select()}
            onChange={(e) => onChange(e)}
        />
    )
})

export default EditableInput
