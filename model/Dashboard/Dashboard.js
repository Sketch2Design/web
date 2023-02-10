import Button from '@/components/Button/Button'
import Header from './Header'
import Sidebar from '../Workspace/Sidebar/Sidebar'
import Maincard from './Maincard'

export default function Dashboard() {
  return (
    <div className='flex w-full'>
      <Sidebar/>
      <div className='flex flex-col w-full space-y-4 '>
        <Header/>
        <Maincard/>
      </div>

        
    </div>
      

  )
}
