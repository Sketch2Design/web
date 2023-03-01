import { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ admin }) {
    const router = useRouter()

    const [current, setcurrent] = useState('profile')

    useLayoutEffect(() => {
        if (router.pathname.endsWith('profile')) setcurrent('profile')
        else if (router.pathname.endsWith('security')) setcurrent('security')
    }, [])

    return (
        <div className="flex justify-center items-center rounded-md w-72 h-10">
            <Link href="profile">
                <div
                    className={`flex items-center justify-center rounded-md w-36 h-10 ${
                        current == 'profile' &&
                        'text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text'
                    }`}
                >
                    <h5>Profile</h5>
                </div>
            </Link>
            <Link href={`${admin ? '/admin/dashboard' : '/dashboard'}`}>
                <div
                    className={`flex items-center justify-center rounded-md w-36 h-10 ${
                        current == 'home' &&
                        'text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text'
                    }`}
                >
                    <h5>Home</h5>
                </div>
            </Link>
            <Link href="security">
                <div
                    className={`flex items-center justify-center rounded-md w-36 h-10 ${
                        current == 'security' &&
                        'text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text'
                    }`}
                >
                    <h5>Security</h5>
                </div>
            </Link>
        </div>
    )
}
