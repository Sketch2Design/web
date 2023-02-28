import { useState } from 'react'

export default function IconSelect({ icons }) {
    const [current, setcurrent] = useState('center')

    return (
        <div className="flex items-center justify-center space-x-6">
            {icons.map((item) => (
                <span
                    key={item.name}
                    className={`w-10 h-10 bg-zinc-900 flex justify-center items-center rounded-md 
                    hover:bg-gradient-to-r from-violet-800 to-violet-600 hover:shadow-lg hover:shadow-violet-500
                    cursor-pointer ${
                        current == item.name &&
                        'bg-white text-zinc-900 hover:text-white'
                    }`}
                    onClick={() => setcurrent(item.name)}
                >
                    {item.icon}
                </span>
            ))}
        </div>
    )
}
