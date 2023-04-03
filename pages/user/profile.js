import Main from '@/model/Auth/Profile/Main'
import Navbar from '@/model/Auth/Profile/Navbar'
import EditName from '@/model/Auth/Profile/EditName'
import { useAuthContext } from '@/store/context/providers/AuthProvider'

export default function Profile() {
    const { auth } = useAuthContext()

    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 py-32">
            <Main name={auth?.user_metadata?.name} />
            <EditName name={auth?.user_metadata?.name} email={auth?.email} />
            <Navbar />
        </div>
    )
}
