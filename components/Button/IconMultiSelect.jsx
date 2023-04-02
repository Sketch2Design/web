export default function IconMultiSelect({
    icon,
    handleSelect,
    current,
    name,
    size,
}) {
    return (
        <button
            className={`${
                size ? size : 'h-10 w-10'
            } flex cursor-pointer items-center justify-center rounded-md 
            border border-transparent bg-zinc-900   ${
                current
                    ? 'bg-zinc-50 text-zinc-900'
                    : 'hover:scale-110 hover:bg-zinc-800 '
            }`}
            onClick={handleSelect}
        >
            <span>{icon}</span>
        </button>
    )
}
