import { ACTIONS } from '@/store/reducer/elementReducer'

export default function Single({ id, icon, current, name, setcurrent }) {
    function changeCurrent() {
        current.id == id
            ? setcurrent({
                  type: ACTIONS.RESET,
              })
            : setcurrent({
                  type: ACTIONS.UPDATE_ALL,
                  id: id,
                  main: name,
                  value: name,
              })
    }

    return (
        <div
            className={`${
                current?.id == id ? 'text-zinc-100' : 'text-zinc-500'
            } flex flex-col relative cursor-pointer px-2`}
        >
            <span onClick={changeCurrent}>{icon}</span>
        </div>
    )
}
