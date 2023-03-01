import Link from 'next/link'

export default function SidebarItems({ value, icon, path, active }) {
    return (
        <Link href={path}>
            <div
                className={`${
                    active == path
                        ? 'bg-gradient-to-b from-fuchsia-700 to-violet-700'
                        : 'bg-transparent'
                } rounded-md relative w-64 h-14 flex items-center justify-center p-[2px]`}
            >
                <button
                    className={`bg-zinc-800 w-full h-full px-4 py-2 rounded-md font-semibold text-xl flex items-center space-x-3`}
                >
                    <span>{icon}</span>
                    <span>{value}</span>
                </button>
            </div>
        </Link>
    )
}
