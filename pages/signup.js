import { AiOutlineArrowRight } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineGoogle } from 'react-icons/ai'

import ButtonIcon from '@/components/Button/ButtonIcon'
import Header from '@/model/Auth/Header'
import IconButton from '@/components/Button/IconButton'
import Input from '@/components/Input/Input'
import Main from '@/model/Auth/Main'

export default function Signup() {
    return (
        <div className="h-screen min-h-screen w-screen flex flex-col">
            <Header />
            <div className="flex flex-col h-full py-40">
                <Main
                    heading="Create A New Account"
                    subheading="Create designs using AI"
                />

                <div className="flex flex-col px-60">
                    <div className="grid grid-cols-2 justify-items-center gap-y-12 w-full">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Input type="password" placeholder="Confirm Password" />
                        <ButtonIcon
                            width="w-80"
                            height="h-16"
                            value="Create An Account"
                            icon={<AiOutlineArrowRight className="w-6 h-6" />}
                        />
                    </div>
                    <h3 className="flex justify-center py-8  font-bold">or</h3>
                    <div className="grid grid-cols-2 justify-items-center gap-y-12 w-full   ">
                        <IconButton
                            width="w-80"
                            height="h-16"
                            icon={<CgProfile className="w-6 h-6" />}
                            value="Sign in as Guest"
                        />
                        <IconButton
                            width="w-80"
                            height="h-16"
                            icon={<AiOutlineGoogle className="w-6 h-6" />}
                            value="Sign in with Google"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
