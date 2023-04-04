import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        router.push('/login')
    }, [])

    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8">
            xx
        </div>
    )
}
