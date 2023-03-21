import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'
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
                  type: ELEMENT_ACTIONS.UPDATE_ALL,
                  values: { id: id, main: name, type: value },
              })
            : setcurrent({
                  type: ELEMENT_ACTIONS.UPDATE_VALUE,
                  values: { type: value },
              })
        setopen((prev) => !prev)
        setselected(value)
    }

    return (
        <div
            className={`${
                current?.id == id ? 'bg-white text-zinc-900' : 'text-zinc-500'
            } ${
                open
                    ? 'rounded-t-md rounded-b-none border border-b-0 border-zinc-700'
                    : 'rounded-md'
            } relative flex cursor-pointer flex-col items-center justify-center  bg-zinc-900 p-2`}
        >
            <div className="flex w-14 items-center justify-center">
                <span
                    onClick={() =>
                        setcurrent({
                            type: ELEMENT_ACTIONS.UPDATE_ALL,
                            values: { id: id, main: name, type: selected },
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
                        <MdArrowDropUp className="h-6 w-6" />
                    ) : (
                        <MdArrowDropDown className="h-6 w-6" />
                    )}
                </span>
            </div>

            {open && (
                <div
                    className={`${
                        current?.id == id
                            ? 'bg-white text-zinc-900'
                            : 'border border-t-0 border-zinc-700 bg-zinc-900 text-zinc-500'
                    } absolute top-10 flex w-[4.5rem] flex-col space-y-3 rounded-b-md pt-1 pb-3 pl-3 `}
                >
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
