
export default function Button({value, width, height}) {
  return (
    <button className={`
		bg-gradient-to-r from-fuchsia-600 to-violet-600 
		px-4 py-2 ${width} ${height}
		rounded-md
		font-semibold 
	`}>
		{value}
    </button>
  )
}



