import Header from '@/model/Auth/Header'
import Main from '@/model/Auth/Main'
import LoginWIthEmail from '@/model/Auth/Login/LoginWIthEmail'

export default function Login() {
    return (
        <div className="flex h-screen min-h-screen w-screen flex-col">
            <Header />
            <div className="flex h-full flex-col items-center justify-center py-40 ">
                <Main
                    heading="Login To Your Account"
                    subheading="Create designs using AI"
                />
                <div className="flex items-center justify-center">
                    <LoginWIthEmail />
                </div>
            </div>
        </div>
    )
}
