import Link from "next/link";

import {MdModeEditOutline} from "react-icons/md"

import Button from "@/components/Button/Button";
import Editbutton from "@/components/Button/EditButton";
import Input from "@/components/Input/Input";

export default function Profile(){
    return(
        <div className="flex flex-col justify-between min-h-screen bg-zinc-900 ">

            <div className="flex justify-around items-center pt-24">
                <div>
                    <h1> <b>HELLO</b> </h1>
                </div>
                <div className="space-y-16 flex flex-col items-center justify-center">
                    <div className="w-80 h-80 rounded-full border-8 border-zinc-800 flex justify-center items-center">
                        <div className="relative w-44 h-44 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600">
                            <img src="wall.jpg" className="w-40 h-40 bg-zinc-700 rounded-full flex items-center 
                            justify-center text-center absolute inset-0 m-auto"/>
                        </div>
                    </div>
                    <Button buttonText="Edit Profile Photo"/>
                </div>
                <div className="space-y-3 "> 
                    <Link href='security'><h5>Profile</h5></Link>
                    <h5 className="text-fuchsia-600">Security</h5>
                </div>
            </div>

            <div className="flex justify-between items-center pb-24 px-24">
                <div>
                    <div className="flex justify-between">
                        <h3><b>password</b></h3>
                        <Editbutton icon={<MdModeEditOutline/>} />
                    </div>
                    <Input type='password' placeholder='Password'/>
                </div>
            </div>
        </div>
    )
}