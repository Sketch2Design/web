export default function Icon({ icon, handleSelect, current, name }) {
    return (
        <button
            className={` flex h-10 w-10 cursor-pointer items-center justify-center rounded-md 
                    border border-transparent bg-zinc-900   ${
                        current == name
                            ? 'bg-white text-zinc-900 '
                            : 'hover:scale-110 hover:border-zinc-800  hover:bg-zinc-800'
                    }`}
            onClick={() => handleSelect(name)}
        >
            <span>{icon}</span>
        </button>
    )
}
