import React from 'react'
import Button from '@/components/Button/Button'

export default function Header() {
  return (
    <div className='flex justify-between'>
        <p>Hello Name</p>
        <Button value='Create a design'/>
    </div>
  )
}
