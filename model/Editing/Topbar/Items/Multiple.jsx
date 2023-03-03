import { ACTIONS } from '@/store/reducer/elementReducer'
import { useState } from 'react'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

export default function Multiple({
    id,
    icon,
    current,
    name,
    defaultSelected,
    values,
    setcurrent,
}) {
    const [selected, setselected] = useState(defaultSelected)
    const [open, setopen] = useState(false)

    function changeCurrent(value) {
        current.id == null
            ? setcurrent({
                  type: ACTIONS.UPDATE_ALL,
                  id: id,
                  main: name,
                  value: value,
              })
            : setcurrent({ type: ACTIONS.UPDATE_VALUE, value: value })
        setopen((prev) => !prev)
        setselected(value)
    }

    return (
        <div
            className={`${
                current?.id == id ? 'text-zinc-100' : 'text-zinc-500'
            } flex flex-col relative cursor-pointer`}
        >
            <div className="flex justify-center items-center w-14">
                <span
                    onClick={() =>
                        setcurrent({
                            type: ACTIONS.UPDATE_ALL,
                            id: id,
                            main: name,
                            value: selected,
                        })
                    }
                >
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
                                onClick={() => changeCurrent(item.name)}
                            >
                                {item.icon}
                            </span>
                        ))}
                </div>
            )}
        </div>
    )
}
