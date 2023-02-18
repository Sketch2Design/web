import {AiOutlineArrowRight, AiOutlineGoogle} from 'react-icons/ai'

import ButtonIcon from '@/components/Button/ButtonIcon'
import IconButton from '@/components/Button/IconButton'
import InputX from '@/components/Input/InputX'


export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8">
    	<ButtonIcon value='Create an Account' icon={<AiOutlineArrowRight className="w-6 h-6"/>} height='h-16' width='w-80'/>
    	<IconButton value='Create an Account' icon={<AiOutlineGoogle className="w-6 h-6"/>} height='h-16' width='w-80'/>

      <InputX type='email' placeholder='Email' name='email'/>
    </div>
  )
}
