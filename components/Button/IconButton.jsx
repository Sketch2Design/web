export default function IconButton({ value, icon, width, height }) {
    return (
        <div
            className={`bg-gradient-to-b from-fuchsia-600 to-violet-600 rounded-md relative ${width} ${height}`}
        >
            <button
                className={`
				absolute inset-0 m-[1px]
				bg-zinc-800
				px-4 py-2
				rounded-md
				font-semibold text-xl 
				flex items-center space-x-2
				`}
            >
                <span>{icon}</span>
                <span>{value}</span>
            </button>
        </div>
    )
}
