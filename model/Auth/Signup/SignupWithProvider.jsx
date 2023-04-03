import { AiOutlineGoogle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import IconButton from '@/components/Button/IconButton'

export default function SignupWithProvider() {
    return (
        <div className="grid w-full grid-cols-2 justify-items-center gap-y-12   ">
            <IconButton
                width="w-80"
                height="h-16"
                icon={<CgProfile className="h-6 w-6" />}
                value="Sign in as Guest"
            />
            <IconButton
                width="w-80"
                height="h-16"
                icon={<AiOutlineGoogle className="h-6 w-6" />}
                value="Sign in with Google"
            />
        </div>
    )
}
