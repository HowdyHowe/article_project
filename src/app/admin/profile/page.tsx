"use client";

import { useRouter } from "next/navigation"

export default function AdminProfilePage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-[75px]">
            <div className="flex flex-col items-center justify-center w-[97%] min-h-[97%] my-4 bg-white rounded-xl">
                <p className="text-xl font-semibold">User Profile</p>

                {/* sizedbox for padding */}
                <div className="h-[20px]"/>

                <div className="flex items-center justify-center w-[60px] h-[60px] text-xl bg-[#BFDBFE] rounded-full">J</div>

                {/* sizedbox for padding */}
                <div className="h-[20px]"/>

                <div className="flex flex-col w-[95%] gap-2 lg:w-[450px]">
                    <div className="flex flex-row w-full h-[50px] pl-4 bg-[#F3F4F6] border border-[#E2E8F0] rounded-lg">
                        <p className="flex items-center justify-start w-[30%] h-full font-semibold">Username:</p>
                        <p className="flex items-center justify-center w-full h-full">Toba Amir sitor</p>
                    </div>
                    <div className="flex flex-row w-full h-[50px] pl-4 bg-[#F3F4F6] border border-[#E2E8F0] rounded-lg">
                        <p className="flex items-center justify-start w-[30%] h-full font-semibold">Password:</p>
                        <p className="flex items-center justify-center w-full h-full">Toba contoh</p>
                    </div>
                    <div className="flex flex-row w-full h-[50px] pl-4 bg-[#F3F4F6] border border-[#E2E8F0] rounded-lg">
                        <p className="flex items-center justify-start w-[30%] h-full font-semibold">Role:</p>
                        <p className="flex items-center justify-center w-full h-full">Toba Amir sitor</p>
                    </div>

                    {/* sizedbox for padding */}
                    <div className="h-[20px]"/>

                    <div className="flex items-center justify-center w-full h-[50px] text-white pl-4 bg-[#2563EB] border border-[#E2E8F0] cursor-pointer rounded-lg" onClick={() => router.back()}>
                        Back to Home
                    </div>
                </div>
            </div>

        </div>
    )
}