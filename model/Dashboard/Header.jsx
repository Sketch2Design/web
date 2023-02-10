import React from 'react'
import Button from '@/components/Button/Button'

export default function Header() {
  return (
    <div className='flex justify-between items-center w-full h-20 px-6 py-6'>
        <p>Hello Name</p>
        <Button value='Create a design'/>
    </div>
  )
}
