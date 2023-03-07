import { HexColorPicker } from 'react-colorful'

import { IoClose } from 'react-icons/io5'

export default function ColorPicker({ handleClose, color, onChange }) {
    return (
        <div className=" flex flex-col items-center justify-center space-y-4 rounded-md px-3 py-2">
            <HexColorPicker
                color={color}
                onChange={(c) => {
                    onChange(c)
                }}
            />
            <div className="flex justify-end ">
                <span
                    onClick={handleClose}
                    className="rounded-full bg-zinc-800 p-2 text-white hover:bg-white hover:text-zinc-900"
                >
                    <IoClose className="h-7 w-7" />
                </span>
            </div>
        </div>
    )
}
