"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const signupSchema = z.object({
    username: z.string().min(5, "Username must be at least 5 letter"),
    password: z.string().min(5, "Password must be at least 8 letter"),
    role: z.enum(["User", "Admin"], {
        message: "Please select a role",
    })
})

type SignupForm = z.infer<typeof signupSchema>

export default function SignupPage() {
    const [ visible, setVisible ] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupForm>({
        resolver: zodResolver(signupSchema)
    })

    const onSubmit = (data: SignupForm) => {
        console.log("Username: ", data.username)
        console.log("Password: ", data.password)
        console.log("Role: ", data.role)
    };

    return (
        <div className="flex flex-col items-center justify-evenly w-[95%] h-[525px] bg-white rounded-xl lg:w-[500px] lg:h-[500px]">
            <img src={"/images/logo-black.png"} className="w-[175px]" alt="Logo"/>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[90%]">
                <label className="text-lg font-semibold">Username</label>
                <input type="text" {...register("username")} className="w-full h-[50px] px-3 border-[2px] rounded-lg placeholder:text-[#64748B]" placeholder="Input Username"/>
                {/* Error sign for username */}
                {errors.username && <p className="text-sm text-[#DC2626]">{errors.username.message}</p>}


                {/* sizedbox for padding */}
                <div className="h-[15px]"/>

                <label className="text-lg font-semibold">Password</label>
                <div className="flex flex-row items-center w-full h-[50px] border-[2px] rounded-lg">
                    <input type={visible ? "text": "password"} {...register("password")} className="w-full h-full px-3 bg-transparent placeholder:text-[#64748B]" placeholder="Input Password"/>
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
                {/* Error sign for password */}
                {errors.password && <p className="text-sm text-[#DC2626]">{errors.password.message}</p>}


                {/* sizedbox for padding */}
                <div className="h-[15px]"/>

                <label className="text-lg font-semibold">Role</label>
                <div className="w-full h-[50px] px-3 bg-transparent border-[2px] rounded-lg">
                    <select {...register("role")} className="w-full h-full focus:outline-none focus:ring-0 resize-none">
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                {/* Error sign for role */}
                {errors.role && <p className="text-sm text-[#DC2626]">{errors.role.message}</p>}


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