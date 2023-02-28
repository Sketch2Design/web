import React from 'react'

export default function SidebarItems({value,icon}) {
  return (
    <div className='flex items-center space-x-2 w-56 px-2 py-3 border-2 rounded-lg'>
      {icon}
       <button className='
		
	'>
		{value}
    </button>
    </div>
  )
}
