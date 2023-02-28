import Button from '@/components/Button/Button'
import React from 'react'
import Navbar from './Navbar'

export default function Main() {
    return (
        <div className="flex justify-center space-x-72 items-center ">
            <div className="space-y-10 flex flex-col items-center justify-center ">
                <div className="w-80 h-80 rounded-full border-8 border-zinc-800 flex justify-center items-center ">
                    <div className="relative w-44 h-44 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600">
                        <img
                            src="wall.jpg"
                            className="w-40 h-40 bg-zinc-700 rounded-full flex items-center 
                            justify-center text-center absolute inset-0 m-auto"
                        />
                    </div>
                </div>
                <Button value="Edit Profile Photo" />
            </div>
        </div>
    )
}
