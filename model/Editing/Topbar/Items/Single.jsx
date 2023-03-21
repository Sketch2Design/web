import { ELEMENT_ACTIONS } from '@/store/reducer/elementReducer'

export default function Single({ id, icon, current, name, setcurrent }) {
    function changeCurrent() {
        current.id == id
            ? setcurrent({
                  type: ELEMENT_ACTIONS.RESET,
              })
            : setcurrent({
                  type: ELEMENT_ACTIONS.UPDATE_ALL,
                  values: { id: id, main: name, type: name },
              })
    }

    return (
        <div
            className={`${
                current?.id == id ? 'bg-white text-zinc-900' : 'text-zinc-500'
            } relative flex cursor-pointer flex-col rounded-lg bg-zinc-900 p-2`}
        >
            <span onClick={changeCurrent}>{icon}</span>
        </div>
    )
}
