import { useState } from 'react'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

export default function Multiple({
    id,
    icon,
    current,
    name,
    values,
    setcurrent,
}) {
    const [selected, setselected] = useState(name)
    const [open, setopen] = useState(false)

    function changeCurrentMultiple(name) {
        setcurrent({ id: id, name: name })
        setopen((prev) => !prev)
        setselected(name)
    }

    return (
        <div
            className={`${
                current?.id == id ? 'text-zinc-100' : 'text-zinc-500'
            } flex flex-col relative cursor-pointer`}
        >
            <div className="flex justify-center items-center w-14">
                <span onClick={() => setcurrent({ id: id, name: selected })}>
                    {current == null
                        ? icon
                        : values.filter((item) => item.name == selected)[0]
                              ?.icon}
                </span>

                <span onClick={() => setopen((prev) => !prev)}>
                    {open ? (
                        <MdArrowDropUp className="edit_topbar_icon" />
                    ) : (
                        <MdArrowDropDown className="edit_topbar_icon" />
                    )}
                </span>
            </div>

            {open && (
                <div className="flex flex-col absolute left-px space-y-3 top-10 ">
                    {values
                        ?.filter((item) => item.name != selected)
                        ?.map((item) => (
                            <span
                                key={item.name}
                                onClick={() => changeCurrentMultiple(item.name)}
                            >
                                {item.icon}
                            </span>
                        ))}
                </div>
            )}
        </div>
    )
}
