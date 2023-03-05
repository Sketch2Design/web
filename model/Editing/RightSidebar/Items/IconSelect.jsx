export default function IconSelect({ icon, handleSelect, current, name }) {
    return (
        <div
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md 
                    bg-zinc-900 from-violet-800 to-violet-600 hover:bg-gradient-to-r hover:shadow-lg
                    hover:shadow-violet-500 ${
                        current == name &&
                        'bg-white text-zinc-900 hover:text-white'
                    }`}
            onClick={() => handleSelect(name)}
        >
            <span>{icon}</span>
        </div>
    )
}
