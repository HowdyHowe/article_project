"use client";

import z from "zod";
import WithAuth from "@/components/with-auth";
import ArticleCard from "@/components/article-card";
import DashboardProfilePopup from "@/components/popup/dashboard-profile-popup";
import DashboardLogoutPopup from "@/components/popup/dashboard-logout-popup";
import { rootState } from "@/store";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setDashboardProfile } from "@/store/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const dashboardSchema = z.object({
    article: z.string(),
    category: z.string()
});

type DashboardForm = z.infer<typeof dashboardSchema>

export default function DashboardPage() {
    const {
        register,
        watch,
    } = useForm<DashboardForm>({
        resolver: zodResolver(dashboardSchema)
    });
    const [ debouncedQuery, setDebouncedQuery ] = useState({
        article: "",
        category: "",
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const articleValue = watch("article");
    const categoryValue = watch("category");
    const dashboardProfile = useSelector((state: rootState) => state.stateData.dashboardProfile);
    const dashboardLogout = useSelector((state: rootState) => state.stateData.dashboardLogout);

    // debounce timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery({
                article: articleValue,
                category: categoryValue,
            })
        }, 500)
        return () => clearTimeout(timer);
    }, [articleValue, categoryValue])

    useEffect(() => {
        console.log("article: ", articleValue);
        console.log("category: ", categoryValue);
    }, [debouncedQuery])

    return (
        <div className="relative flex flex-col items-center justify-start w-full h-full">

            <DashboardProfilePopup show={dashboardProfile}/>
            <DashboardLogoutPopup show={dashboardLogout}/>
            <header className="relative flex flex-col items-center justify-center w-full">
                <img src="/images/headerdash.jpg" alt="header background" className="absolute top-[75px] w-full h-[600px] object-cover lg:top-0 lg:h-[600px]"/>
                <div className="absolute top-[75px] w-full h-[600px] bg-[#2563EB] opacity-85 lg:top-0 lg:h-[600px]"/>

                <div className="absolute top-0 flex flex-row items-center justify-between w-full h-[75px] px-[4%] lg:h-[100px]">
                    <img src="/images/logo-white.png" alt="logo" className="hidden lg:flex w-[150px]"/>
                    <img src="/images/logo-black.png" alt="logo" className="lg:hidden w-[125px]"/>

                    <div className="flex flex-row items-center justify-center cursor-pointer" onClick={() => {
                        dispatch(setDashboardProfile());
                    }}>
                        <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                        <p className="hidden lg:flex ml-4 text-lg text-white underline">James bond</p>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center w-[95%] h-[500px] mt-[100px] text-white text-center z-10 lg:w-[45%]">
                    <p className="text-lg">Blog Genzet</p>
                    <p className="mt-4 text-5xl lg:text-6xl">The Journal: Design Resources, Interviews, and Industry News</p>
                    <p className="mt-6 text-xl font-thin lg:text-3xl">Your daily dose of design insight!</p>

                    {/* sizedbox for padding */}
                    <div className="h-[75px]"/>

                    <div className="flex items-center justify-center w-full h-[120px] px-3 bg-[#3B82F6] rounded-xl lg:h-[60px]">
                        <form className="flex flex-col items-center justify-center gap-3 w-full lg:flex-row">
                            <div className="flex items-center justify-center w-full h-[40px] px-3 bg-white rounded-lg lg:w-[30%]">
                                <select {...register("category")} className="w-full text-black bg-transparent">
                                    <option value="All">All</option>
                                    <option value="contoh1">contoh1</option>
                                    <option value="contoh2">contoh2</option>
                                    <option value="contoh3">contoh3</option>
                                    <option value="contoh4">contoh4</option>
                                </select>
                            </div>

                            <div className="w-full text-black px-3 bg-white rounded-lg">
                                <input {...register("article")} type="text" className="w-full h-[40px] bg-transparent" placeholder="Search Articles"/>
                            </div>
                        </form>
                    </div>
                </div>
            </header>

            {/* sizedbox for padding */}
            <div className="h-[50px]"/>

            <main className="flex flex-col items-center justify-center w-[85%]">
                <p className="w-full mb-6">Showing: 20 of 40 articles</p>
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
                    {
                        Array.from({length: 9}, (_, index) => (
                            <ArticleCard key={index}/>
                        ))
                    }
                </div>

                {/* sizedbox for padding */}
                <div className="h-[50px]"/>

                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <LuChevronLeft size={20} className="mr-2"/>
                        <p className="font-semibold">Previous</p>
                    </div>

                    <div className="flex flex-row items-center justify-center lg:w-[200px]">
                        <div className="flex items-center justify-center w-[50px] h-[50px]">1</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">2</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px]">3</div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <p className="font-semibold">Next</p>
                        <LuChevronRight size={20} className="ml-2"/>
                    </div>
                </div>
            </main>

            {/* sizedbox for padding */}
            <div className="h-[75px]"/>

            <footer className="flex flex-col items-center justify-center w-full h-[75px] bg-[#2563EB] opacity-85 lg:flex-row lg:h-[100px]">
                <img src="/images/logo-white.png" alt="logo" className="w-[110px] mb-1 lg:w-[150px] lg:mb-0"/>
                <p className="ml-4 text-xs text-white lg:text-base">@ 2025 Blog genzet. All right reserved.</p>
            </footer>
        </div>
    );
}