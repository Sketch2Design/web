export default function ButtonIcon({ value, icon, width, height, onClick }) {
    return (
        <button
            className={`
		  bg-gradient-to-r from-fuchsia-600 to-violet-600 
		  px-4 py-2 ${width} ${height}
		  flex
		  items-center justify-between 
		  rounded-md text-xl font-semibold
		`}
            onClick={onClick}
        >
            <span>{value}</span>
            <span>{icon}</span>
        </button>
    )
}
