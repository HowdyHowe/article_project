import { useEffect } from "react";
import { LuLogOut } from "react-icons/lu"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"
import { reset, setDashboardLogout, setDashboardProfile } from "@/store/state";

type DashboardLogoutPopupProps = {
    show: boolean;
}

export default function DashboardProfilePopup({ show }: DashboardLogoutPopupProps) {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50" onClick={() => {
                dispatch(setDashboardProfile());
            }}/>

            <div className="absolute top-[75px] right-[4%] grid grid-rows-2 w-[250px] h-[100px] bg-white rounded-lg lg:top-[100px] lg:[250px]">
                <div className="flex items-center justify-start px-4 border-b cursor-pointer" onClick={() => {
                    dispatch(reset());
                    router.push("/dashboard/profile")
                }}>
                    My Account
                </div>
                <div className="flex items-center justify-start px-4 text-red-600 cursor-pointer" onClick={() => {
                    dispatch(setDashboardProfile());
                    dispatch(setDashboardLogout());
                }}>
                    <LuLogOut className="mr-3"/>
                    <p>Logout</p>
                </div>
            </div>

        </div>
    )
}