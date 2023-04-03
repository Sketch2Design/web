import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link'

import {
    AiFillFolder,
    AiFillHome,
    AiFillLayout,
    AiFillSetting,
} from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'

import Button from '@/components/Button/Button'
import SidebarItems from './SidebarItems'
import ButtonIcon from '@/components/Button/ButtonIcon'

const paths = ['dashboard', 'settings']

export default function AdminSidebar() {
    const [current, setcurrent] = useState('dashbaord')

    const router = useRouter()

    useLayoutEffect(() => {
        paths.forEach((item) => {
            router.pathname.endsWith(item) && setcurrent(item)
        })
    }, [])

    return (
        <div className="fixed z-50 flex h-screen w-96 flex-col items-center space-y-20 rounded-tr-3xl rounded-br-3xl bg-zinc-800 py-10">
            <p className="flex justify-center text-4xl font-bold">Sketch</p>

            <div className="flex flex-col justify-center space-y-2 ">
                <div className="h-24 w-24 rounded-full border-4 border-t-fuchsia-600 border-r-fuchsia-600 border-b-violet-900 border-l-violet-900 bg-slate-100"></div>
                <h5 className=" flex justify-center font-bold">Name</h5>
                <Link href="profile">
                    <Button value="Profile" />
                </Link>
            </div>

            <div className="flex h-full flex-col items-center justify-between ">
                <div className="flex flex-col space-y-8">
                    <SidebarItems
                        icon={<AiFillHome />}
                        value="Dashboard"
                        path="dashboard"
                        active={current}
                    />

                    <SidebarItems
                        icon={<AiFillSetting />}
                        value="Settings"
                        path="settings"
                        active={current}
                    />
                </div>
                <ButtonIcon
                    width="w-64"
                    height="h-14"
                    icon={<MdLogout className="h-6 w-6" />}
                    value="Logout"
                />
            </div>
        </div>
    )
}
