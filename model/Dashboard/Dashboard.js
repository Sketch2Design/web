import Button from '@/components/Button/Button'
import Header from './Header'
import Sidebar from '../Workspace/Sidebar/Sidebar'
import Maincard from './Maincard'
import Boxes from './Boxes'

export default function Dashboard() {
  return (
    <div className='flex w-full  relative'>
      <Sidebar/>
      <div className='flex flex-col w-full space-y-4 items-center ml-96'>
        <Header/>
        <Maincard/>
        <div className='flex justify-between items-center w-full h-20 px-14 py-3 pt-3'>
          <p className='font-bold text-2xl'>Recent Design </p>
          <p>View more</p>
        </div>
        <div className='flex flex-row '>
          <Boxes/>
        </div>

        <div className='flex justify-between items-center w-full h-20 px-14 py-3 pt-3'>
          <p className='font-bold text-2xl'>Trending template </p>
          <p>View more</p>
        </div>
        <div className='flex flex-row '>
          <Boxes/>
        </div>
      
      </div>
      

        
    </div>
      

  )
}
