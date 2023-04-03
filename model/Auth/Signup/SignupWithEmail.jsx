import { useRef } from 'react'

import useAuth from '@/utils/hooks/supabase/useAuth'

import { AiOutlineArrowRight } from 'react-icons/ai'

import ButtonIcon from '@/components/Button/ButtonIcon'
import Input from '@/components/Input/Input'

export default function SignupWithEmail() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const { loading, error, signup } = useAuth()

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="grid w-full grid-cols-2 justify-items-center gap-y-12">
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={nameRef}
                />
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
                    value={loading ? 'Loading...' : 'Create An Account'}
                    icon={<AiOutlineArrowRight className="h-6 w-6" />}
                    onClick={() => {
                        signup(nameRef, emailRef, passwordRef)
                    }}
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
