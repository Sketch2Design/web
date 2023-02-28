import { AiOutlineArrowRight } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineGoogle } from 'react-icons/ai'

import ButtonIcon from '@/components/Button/ButtonIcon'
import Header from '@/model/Auth/Header'
import IconButton from '@/components/Button/IconButton'
import Input from '@/components/Input/Input'
import Main from '@/model/Auth/Main'

export default function Login() {
    return (
        <div className="min-h-screen h-screen w-screen flex flex-col">
            <Header />
            <div className="flex flex-col  h-full py-40 ">
                <Main
                    heading="Login To Your Account"
                    subheading="Create designs using AI"
                />
                <div className="grid grid-cols-3 justify-items-center place-items-center px-96 w-full ">
                    <div className="flex flex-col space-y-12">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <ButtonIcon
                            width="w-80"
                            height="h-16"
                            value="Login to your Account"
                            icon={<AiOutlineArrowRight className="w-6 h-6" />}
                        />
                    </div>
                    <h3 className="font-bold">or</h3>
                    <div className="flex flex-col space-y-12">
                        <IconButton
                            width="w-80"
                            height="h-16"
                            icon={<CgProfile />}
                            value="Sign in as Guest"
                        />
                        <IconButton
                            width="w-80"
                            height="h-16"
                            icon={<AiOutlineGoogle />}
                            value="Sign in with Google"
                        />
                        <ButtonIcon
                            width="w-80"
                            height="h-16"
                            value="Create an Account"
                            icon={<AiOutlineArrowRight className="w-6 h-6" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
