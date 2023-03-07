export default function IconSelect({ icon, handleSelect, current, name }) {
    return (
        <div
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md 
                    border border-transparent bg-zinc-900 hover:border-zinc-800  hover:shadow-2xl hover:shadow-zinc-100  ${
                        current == name && 'bg-white text-zinc-900 '
                    }`}
            onClick={() => handleSelect(name)}
        >
            <span>{icon}</span>
        </div>
    )
}
