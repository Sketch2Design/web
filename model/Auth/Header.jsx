import Link from 'next/link'

export default function Header() {
    return (
        <div className=" h-20 bg-zinc-900 text-white flex justify-between items-center px-6">
            <h3 className="font-bold">Sketch</h3>
            <div className="flex space-x-5 items-center">
                <Link href="/login">
                    <h5>Sign in</h5>
                </Link>
                <Link href="/signup">
                    <h5>Sign up</h5>
                </Link>
            </div>
        </div>
    )
}
