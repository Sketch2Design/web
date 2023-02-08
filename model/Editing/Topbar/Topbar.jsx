import Button from '@/components/Button/Button'
import React from 'react'

export default function Topbar() {
  return (
    <div className='bg-zinc-800 h-20 my-4 rounded-xl flex justify-between items-center px-4'>
        
        <div>
            Icon
        </div>

        <div className='flex'>
            <Button value='Export'/>

        </div>
    </div>
  )
}
