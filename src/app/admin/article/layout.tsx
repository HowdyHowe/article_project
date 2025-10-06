"use client";

import AdminLogoutPopup from "@/components/popup/admin-logout-popup";
import AdminDeleteArticlesPopup from "@/components/popup/admin-delete-articles-popup";
import { useEffect } from "react";
import { rootState } from "@/store";
import { useRouter } from "next/navigation";
import { reset, setAdminLogout } from "@/store/state";
import { useDispatch, useSelector } from "react-redux";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
    const adminLogout = useSelector((state: rootState) => state.stateData.adminLogout);
    const adminDeleteArticle = useSelector((state: rootState) => state.stateData.adminDeleteArticle);

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleBack = () => {
            dispatch(reset());
        };

        window.addEventListener("popstate", handleBack);

        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, []);

    return (
        <div className="relative flex items-start justify-center w-full h-screen">

            <AdminDeleteArticlesPopup show={adminDeleteArticle} />
            <AdminLogoutPopup show={adminLogout}/>
            <div className="flex flex-row items-start justify-center w-full h-full">
                <aside className="flex flex-col items-center justify-start w-[325px] h-full pt-8 bg-[#2563EB]">
                    <div className="flex flex-col items-start justify-center w-[90%] text-lg">
                        <div className="flex items-center justify-start w-full h-[40px] px-4">
                            <img src="/images/logo-white.png" alt="logo" className="w-[150px]"/>
                        </div>
                        <div className="flex items-center justify-start w-full h-[50px] mt-8 px-4 text-white rounded-md cursor-pointer bg-[#3B82F6]">
                            <img src="/images/article-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Articles</p>
                        </div>
                        <div className="flex items-center justify-start w-full h-[50px] mt-2 px-4 text-white rounded-md cursor-pointer" onClick={() => {
                            router.push("/admin/category")
                        }}>
                            <img src="/images/category-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Category</p>
                        </div>
                        <div className="flex items-center justify-start w-full h-[50px] mt-2 px-4 text-white rounded-md cursor-pointer" onClick={() => {
                            dispatch(setAdminLogout());
                        }}>
                            <img src="/images/logout-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Logout</p>
                        </div>
                    </div>

                </aside>
                <div className="relative flex flex-col w-full h-full bg-[#F3F4F6]">
                    <header className="absolute top-0 flex flex-row items-center justify-between w-full min-h-[75px] px-[2%] border-b">
                        <p className="text-2xl font-semibold">
                            Article
                        </p>

                        <div className="flex flex-row items-center justify-center cursor-pointer" onClick={() => {
                            router.push("/admin/profile")
                        }}>
                            <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                            <p className="flex ml-4 text-lg text-black underline">James bond</p>
                        </div>
                    </header>

                    {/* sizedbox for padding */}

                    {children}

                </div>
            </div>
        </div>
    );
}