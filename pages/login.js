import Buttonicon from "../components/Buttonicon";
import Header from "../components/Header";
import Iconbutton from "../components/Iconbutton";
import Input from "../components/Input";
import {AiOutlineArrowRight} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {AiOutlineGoogle} from "react-icons/ai"

export default function Login(){
    return(
        <div className="min-h-screen h-screen w-screen flex flex-col">
            <Header/>
            <div className="flex flex-col justify-between h-full py-20">

                <div className="flex flex-col justify-between h-full py-20">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-white font-bold text-5xl">Login To Your Account</h1>
                        <p className="text-zinc-500 py-1 text-base">Create designs using AI</p>
                    </div>
                </div> 
                <div className="grid grid-cols-3 justify-items-center place-items-center px-60 w-full ">
                    <div className="flex flex-col space-y-12">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Buttonicon  value="Login to your Account" 
                        icon={<AiOutlineArrowRight className="w-6 h-6"/>} />
                    </div>
                    <div className="flex justify-items-center font-bold">
                        <h3>or</h3>
                    </div>
                    <div className="flex flex-col space-y-12">
                        <Iconbutton className="w-6 h-6 " icon={CgProfile} value="Sign in as Guest"/>
                        <Iconbutton className="w-6 h-6" icon={AiOutlineGoogle} value="Sign in with Google"/>
                        <Buttonicon  value="Create an Account" 
                        icon={<AiOutlineArrowRight className="w-6 h-6"/>}/>
                    </div>
                </div>   
            </div>
        </div>
    )
}