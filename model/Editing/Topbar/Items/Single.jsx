export default function Single({ id, icon, current, name, setcurrent }) {
    return (
        <div
            className={`${
                current?.id == id ? 'text-zinc-100' : 'text-zinc-500'
            } flex flex-col relative cursor-pointer px-2`}
        >
            <span onClick={() => setcurrent({ id: id, name: name })}>
                {icon}
            </span>
        </div>
    )
}
