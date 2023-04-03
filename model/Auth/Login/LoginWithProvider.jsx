import Link from 'next/link'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineGoogle } from 'react-icons/ai'

import IconButton from '@/components/Button/IconButton'
import ButtonIcon from '@/components/Button/ButtonIcon'

export default function LoginWithProvider() {
    return (
        <div className="flex flex-col space-y-[72px]">
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
            <Link href="/signup">
                <ButtonIcon
                    width="w-80"
                    height="h-16"
                    value="Create an Account"
                    icon={<AiOutlineArrowRight className="h-6 w-6" />}
                />
            </Link>
        </div>
    )
}
