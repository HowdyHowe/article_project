"use client";

import { useRouter } from "next/navigation"

export default function ArticleCard() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-start justify-start cursor-pointer" onClick={() => router.push("/dashboard/article")}>
            <img src="/images/headerdash.jpg" alt="image card" className="w-full h-[200px] bg-black rounded-xl object-cover lg:h-[300px]" loading="lazy"/>
            <p className="mt-4 text-[#475569]">August 17, 2025</p>
            <p className="min-h-[3.5rem] my-2 text-xl line-clamp-2 font-semibold">Title contoh contoh contoh contoh contoh contoh contoh contoh</p>
            <p className="min-h-[3rem] mb-2 text-[#475569] line-clamp-2">content content content content content content content content content content content content content content content content content content content content</p>

            <div className="flex flex-row gap-2">
                <div className="max-w-[200px] py-1 px-5 text-center text-[#1E3A8A] line-clamp-1 bg-[#BFDBFE] rounded-2xl">
                    Tag
                </div>
                <div className="max-w-[200px] py-1 px-5 text-center text-[#1E3A8A] line-clamp-1 bg-[#BFDBFE] rounded-2xl">
                    Tag number 2
                </div>
            </div>
        </div>
    )
}