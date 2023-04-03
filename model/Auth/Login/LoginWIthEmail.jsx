import { useRef } from 'react'

import useAuth from '@/utils/hooks/supabase/useAuth'

import { AiOutlineArrowRight } from 'react-icons/ai'

import ButtonIcon from '@/components/Button/ButtonIcon'
import Input from '@/components/Input/Input'

export default function LoginWIthEmail() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const { error, loading, signin } = useAuth()

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-10">
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                />

                <ButtonIcon
                    width="w-80"
                    height="h-16"
                    value={loading ? 'Loading...' : 'Login to your Account'}
                    icon={<AiOutlineArrowRight className="h-6 w-6" />}
                    onClick={() => signin(emailRef, passwordRef)}
                />
            </div>
            {error.value && (
                <p className=" py-0.5 px-4 text-lg text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    )
}
