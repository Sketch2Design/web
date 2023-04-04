import Link from 'next/link'

import { useAuthContext } from '@/store/context/providers/AuthProvider'

import Button from '@/components/Button/Button'

export default function Header() {
    const { auth } = useAuthContext()

    return (
        <div className="flex h-20 w-full items-center justify-between text-2xl font-bold">
            <h5>{auth?.user_metadata?.name}</h5>
            <Link href="/create">
                <Button value="Create a design" />
            </Link>
        </div>
    )
}
