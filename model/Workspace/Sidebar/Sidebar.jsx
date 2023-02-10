import {AiFillHome,AiFillLayout,AiFillSetting,AiOutlineLogout} from 'react-icons/ai'
import Button from '@/components/Button/Button'
import SidebarItems from './SidebarItems'

export default function Side() {
  return (
    <div className='bg-zinc-800 h-screen w-96 rounded-tr-xl rounded-br-xl flex flex-col items-center'>
        <p className='font-bold text-4xl flex justify-center py-10'>Sketch</p>

        <div className='flex flex-col justify-center space-y-2 mt-10 mb-16'>
            <div className='rounded-full bg-slate-100 w-24 h-24 border-4 border-t-fuchsia-600 border-r-fuchsia-600 border-b-violet-900 border-l-violet-900'></div>
             <p className='flex justify-center font-bold'>Name</p>
             <Button value='Profile' />
        </div>

        <div className='flex flex-col justify-center space-y-4'>
             <SidebarItems icon={<AiFillHome/>} value='Dashboard'/>
             <SidebarItems icon={<AiFillLayout/>} value='Templates'/>
             <SidebarItems icon={<AiFillSetting/>} value='Settings'/>
        </div>
        <div className='mt-64'>
              <SidebarItems icon={<AiOutlineLogout/>} value='Logout'/>
        </div>
    </div>
  )
}
