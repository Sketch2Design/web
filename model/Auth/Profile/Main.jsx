export default function Main({ name = 'NA' }) {
    return (
        <div className="flex items-center justify-center space-x-72 ">
            <div className="flex flex-col items-center justify-center space-y-10 ">
                <div className="flex h-80 w-80 items-center justify-center rounded-full border-8 border-zinc-800 ">
                    <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600">
                        <p className="text-7xl">
                            {name.slice(0, 2).toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
