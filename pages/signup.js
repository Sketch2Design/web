import Header from '@/model/Auth/Header'
import Main from '@/model/Auth/Main'
import SignupWithEmail from '@/model/Auth/Signup/SignupWithEmail'

export default function Signup() {
    return (
        <div className="flex h-screen min-h-screen w-screen flex-col">
            <Header />
            <div className="flex h-full flex-col items-center justify-center py-40">
                <Main
                    heading="Create A New Account"
                    subheading="Create designs using AI"
                />
                <div className="flex h-[420px] w-[1200px] flex-col items-center justify-between">
                    <SignupWithEmail />
                </div>
            </div>
        </div>
    )
}
