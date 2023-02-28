import React from 'react'

export default function Maincard() {
    return (
        <div className="bg-gradient-to-r from-fuchsia-600 to-violet-600 h-60 rounded-xl w-11/12 py-5 flex flex-col items-center justify-center">
            <p className="font-bold text-6xl flex justify-center ">
                Upload Sketches
            </p>
            <p className="flex justify-center py-4 text-lg">
                Upload hand-drawn sketches and convert them into designs using
                AI
            </p>
            <button className="bg-black w-72 h-14 rounded-xl items-center text-2xl">
                Upload
            </button>
        </div>
    )
}
