import {AiOutlineArrowRight} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {AiOutlineGoogle} from "react-icons/ai"

import Buttonicon from "../components/Buttonicon"
import Header from "../components/Header"
import Iconbutton from "../components/Iconbutton"
import Input from "../components/Input"

export default function Signup(){
    return(
        <div className="h-screen min-h-screen w-screen flex flex-col">
            <Header/>
            <div className="flex flex-col justify-between h-full py-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white font-bold text-5xl">Create A New Account</h1>
                    <p className="text-zinc-500 py-1 text-base">Create designs using AI</p>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-2 justify-items-center gap-y-12 w-full">
                        <Input type='email' placeholder="Email"/>
                        <Input type='password' placeholder="Password"/>
                        <Input type='password' placeholder="Confirm Password"/>
                        <Buttonicon value="Create An Account" icon={<AiOutlineArrowRight className="w-6 h-6"/>}/>
                    
                    </div>
                    <h3 className="flex justify-center py-8  font-bold">or</h3>
                    <div className="grid grid-cols-2 justify-items-center gap-y-12 w-full   ">
                        <Iconbutton icon={<CgProfile className="w-6 h-6"/>} value="Sign in as Guest" />
                        <Iconbutton icon={<AiOutlineGoogle className="w-6 h-6"/>} value="Sign in with Google" />
                    </div>
                </div>
            </div>
        </div>
    )
}