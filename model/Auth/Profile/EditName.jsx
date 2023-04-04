import { useRef, useState } from 'react'

import EditInput from '@/components/Input/EditInput'
import useAuth from '@/utils/hooks/supabase/useAuth'

export default function EditName({ name, email }) {
    const { editName } = useAuth()

    const [save, setsave] = useState(false)
    const nameRef = useRef(null)

    return (
        <div className="flex items-center justify-center space-x-96 px-96">
            <EditInput
                name="name"
                placeholder="Name"
                type="text"
                defaultValue={name}
                edit={true}
                ref={nameRef}
                saveFunc={() => {
                    setsave(false)
                    editName(nameRef)
                }}
                editFunc={() => setsave(true)}
                save={save}
            />
            <EditInput
                name="email"
                placeholder="Email"
                type="email"
                defaultValue={email}
            />
        </div>
    )
}
