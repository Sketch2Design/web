export default function IconButton({ value, icon, width, height, onClick }) {
    return (
        <div
            className={`relative rounded-md bg-gradient-to-b from-fuchsia-600 to-violet-600 ${width} ${height}`}
        >
            <button
                onClick={onClick}
                className={`
				absolute inset-0 m-[1px] flex
				items-center space-x-2
				rounded-md
				bg-zinc-800 px-4 
				py-2 text-xl font-semibold
				`}
            >
                <span>{icon}</span>
                <span>{value}</span>
            </button>
        </div>
    )
}
