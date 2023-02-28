import Boxes from '@/model/Dashboard/Boxes'
import Header from '@/model/Dashboard/Header'
import React from 'react'
import Sidebar from '../model/Workspace/Sidebar/Sidebar'
export default function template() {
  return (
    <div>
        <Sidebar/>
        <div className='flex flex-col ml-96 items-center space-y-4'>
            <Header/>
        </div>
        <div className='flex flex-col ml-96  px-14 font-bold text-2xl ' >
        <p>Template</p>
        </div>
        
        <div className='space-y-4 ml-80 px-2'>
          
            <Boxes/>
            <Boxes/>
            <Boxes/>
        </div>
    </div>
  )
}
