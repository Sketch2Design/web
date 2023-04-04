import { forwardRef } from 'react'
import { MdModeEditOutline, MdOutlineCheck } from 'react-icons/md'

import Input from './Input'

const EditInput = forwardRef(function EditInput(
    { name, type, placeholder, defaultValue, edit, editFunc, saveFunc, save },
    ref
) {
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
                <label className="text-xl font-bold" htmlFor={name}>
                    {placeholder}
                </label>
                {edit && (
                    <div>
                        {save ? (
                            <span
                                className="cursor-pointer text-lg text-zinc-500"
                                onClick={saveFunc}
                            >
                                <MdOutlineCheck className="h-6 w-6" />
                            </span>
                        ) : (
                            <span
                                className="cursor-pointer text-lg text-zinc-500"
                                onClick={editFunc}
                            >
                                <MdModeEditOutline className="h-5 w-5" />
                            </span>
                        )}
                    </div>
                )}
            </div>
            <Input
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                disabled={!edit || !save}
                defaultValue={defaultValue}
            />
        </div>
    )
})
export default EditInput
