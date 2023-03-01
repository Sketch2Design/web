import { MdModeEditOutline } from 'react-icons/md'

import Main from '@/model/Auth/Profile/Main'
import LabelInput from '@/components/Input/LabelInput'
import Navbar from '@/model/Auth/Profile/Navbar'

export default function Profile() {
    return (
        <div className="flex flex-col justify-between items-center min-h-screen bg-zinc-900 py-32">
            <Main />

            <div className="flex justify-center space-x-96 items-center px-96">
                <LabelInput
                    icon={<MdModeEditOutline className="w-5 h-5" />}
                    name="name"
                    placeholder="Name"
                    type="text"
                />
                <LabelInput name="email" placeholder="Email" type="email" />
            </div>

            <Navbar />
        </div>
    )
}
