import React from 'react'
import Button from '@/components/Button/Button'

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full h-20 font-bold text-2xl">
            <h5>Hello Usama</h5>
            <Button value="Create a design" />
        </div>
    )
}
