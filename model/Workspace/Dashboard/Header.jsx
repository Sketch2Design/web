import React from 'react'
import Button from '@/components/Button/Button'
import { useAuthContext } from '@/store/context/providers/AuthProvider'

export default function Header() {
    const { auth } = useAuthContext()

    return (
        <div className="flex h-20 w-full items-center justify-between text-2xl font-bold">
            <h5>{auth?.user_metadata?.name}</h5>
            <Button value="Create a design" />
        </div>
    )
}
