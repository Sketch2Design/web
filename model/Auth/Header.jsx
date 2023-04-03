import Button from '@/components/Button/Button'
import Link from 'next/link'

export default function Header() {
    return (
        <div className=" flex h-20 items-center justify-between bg-zinc-900 px-6 text-white">
            <h3 className="font-bold">Sketch</h3>
            <div className="flex items-center space-x-5 font-bold">
                <Link href="/login">
                    <h6>Log in</h6>
                </Link>
                <Link href="/signup">
                    <Button value="Sign up" />
                </Link>
            </div>
        </div>
    )
}
