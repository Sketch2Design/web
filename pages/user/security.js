import Main from '@/model/Auth/Profile/Main'
import Navbar from '@/model/Auth/Profile/Navbar'
import EditPassword from '@/model/Auth/Profile/EditPassword'
import { useAuthContext } from '@/store/context/providers/AuthProvider'

export default function Profile() {
    const { auth } = useAuthContext()

    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 py-32">
            <Main name={auth?.user_metadata?.name} />

            <EditPassword />

            <Navbar />
        </div>
    )
}
