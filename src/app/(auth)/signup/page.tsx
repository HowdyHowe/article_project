"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function SignupPage() {
    const [ visible, setVisible ] = useState(false);
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-evenly w-[95%] h-[525px] bg-white rounded-xl lg:w-[500px] lg:h-[500px]">
            <img src={"/images/logo-black.png"} className="w-[175px]" alt="Logo"/>

            <form className="flex flex-col w-[90%]">
                <label className="text-lg font-semibold">Username</label>
                <input type="text" className="w-full h-[50px] px-3 border-[2px] rounded-lg placeholder:text-[#64748B]" placeholder="Input Username"/>

                {/* sizedbox for padding */}
                <div className="h-[15px]"/>

                <label className="text-lg font-semibold">Password</label>
                <div className="flex flex-row items-center w-full h-[50px] border-[2px] rounded-lg">
                    <input type={visible ? "text": "password"} className="w-full h-full px-3 bg-transparent placeholder:text-[#64748B]" placeholder="Input Password"/>
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
                <div className="h-[15px]"/>

                <label className="text-lg font-semibold">Role</label>
                <div className="w-full h-[50px] px-3 bg-transparent border-[2px] rounded-lg">
                    <select className="w-full h-full focus:outline-none focus:ring-0 resize-none">
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                {/* sizedbox for padding */}
                <div className="h-[30px]"/>

                <button type="submit" className="flex items-center justify-center w-full h-[50px] text-white bg-[#2563EB] rounded-lg">Register</button>
            </form>

            <div className="flex flex-row">
                <p className="mr-1 text-sm lg:text-base">Already have an account?</p>
                <a onClick={() => router.push("/login")} rel="noopener noreferrer" className="text-blue-600 text-sm lg:text-base underline cursor-pointer">Login</a>
            </div>
        </div>
    );
}