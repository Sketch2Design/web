import { useRef, useState } from 'react'

import useAuth from '@/utils/hooks/supabase/useAuth'

import EditInput from '@/components/Input/EditInput'

export default function EditPassword() {
    const { editPassword } = useAuth()

    const [save, setsave] = useState(false)
    const [confirm, setconfirm] = useState(false)
    const [message, setmessage] = useState(null)

    const passwordRef = useRef(null)
    const confirmRef = useRef(null)

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center space-x-96 px-96">
                <EditInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    defaultValue="******"
                    edit={true}
                    ref={passwordRef}
                    editFunc={() => {
                        setmessage(null)
                        setsave(true)
                        setconfirm(true)
                    }}
                    save={save}
                />
                <EditInput
                    save={confirm || save}
                    name="confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    edit={save}
                    ref={confirmRef}
                    defaultValue="******"
                    saveFunc={() => {
                        setconfirm(false)
                        setsave(false)
                        if (
                            passwordRef.current.value !==
                                confirmRef.current.value ||
                            passwordRef.current.value === '******' ||
                            confirmRef.current.value === '******'
                        ) {
                            setmessage("Password doesn't match")
                            passwordRef.current.value = '******'
                            confirmRef.current.value = '******'
                            return
                        }
                        editPassword(passwordRef.current.value, setmessage)
                    }}
                />
            </div>
            <p className="text-lg text-blue-400">{message}</p>
        </div>
    )
}
