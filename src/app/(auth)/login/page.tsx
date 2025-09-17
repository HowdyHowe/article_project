"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function LoginPage() {
    const [ visible, setVisible ] = useState(false);
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-evenly w-[95%] h-[450px] bg-white rounded-xl lg:w-[500px] lg:h-[450px]">
           <img src={"/images/logo-black.png"} className="w-[175px]" alt="Logo"/>

           <form className="flex flex-col w-[90%]">
                <label className="text-lg font-semibold">Username</label>
                <input type="text" className="w-full h-[50px] p-3 border-[2px] rounded-lg placeholder:text-[#64748B]" placeholder="Input Username"/>

                {/* sizedbox for padding */}
                <div className="h-[15px]"/>

                <label className="text-lg font-semibold">Password</label>
                <div className="flex flex-row items-center w-full h-[50px] border-[2px] rounded-lg">
                    <input type={visible ? "text": "password"} className="w-full h-full p-3 bg-transparent placeholder:text-[#64748B]" placeholder="Input Password"/>
                    <div className="m-3" onClick={
                        () => setVisible(!visible)
                    }>
                        {
                            visible ?
                            <LuEye size={22} className="text-[#b7bcc3]"/>:
                            <LuEyeOff size={22} className="text-[#b7bcc3]"/>
                        }
                    </div>
                </div>

                {/* sizedbox for padding */}
                <div className="h-[30px]"/>

                <button type="submit" className="flex items-center justify-center w-full h-[50px] text-white bg-[#2563EB] rounded-lg">Login</button>
           </form>

           <div className="flex flex-row">
                <p className="mr-1 text-sm lg:text-base">Don`t have an account?</p>
                <a onClick={() => router.push("/signup")} rel="noopener noreferrer" className="text-blue-600 text-sm lg:text-base underline cursor-pointer">Register</a>
            </div>
        </div>
    );
}