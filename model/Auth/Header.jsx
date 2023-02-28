import Button from '@/components/Button/Button'
import Link from 'next/link'

export default function Header() {
    return (
        <div className=" h-20 bg-zinc-900 text-white flex justify-between items-center px-6">
            <h3 className="font-bold">Sketch</h3>
            <div className="flex space-x-5 items-center font-bold">
                <Link href="/login">
                    <h6>Sign in</h6>
                </Link>
                <Link href="/signup">
                    <Button value="Sign up" />
                </Link>
            </div>
        </div>
    )
}
