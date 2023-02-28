import React from 'react'
import Button from '@/components/Button/Button'

export default function Header() {
  return (
    <div className='flex justify-between items-center w-full h-20 px-14 py-6 pt-20 font-bold text-2xl'>
        <p>Hello Name</p>
        <Button value='Create a design'/>
    </div>
  )
}
