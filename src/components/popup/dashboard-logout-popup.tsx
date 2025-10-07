
import AlertAnimation from "../alert-animation";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { reset, setDashboardLogout } from "@/store/state";
import axiosInstance from "../axios-instance";

type DashboardLogoutPopupProps = {
    show: boolean;
}

type AlertType = {
    message: string;
    show: boolean;
    type: string
}

export default function DashboardLogoutPopup({ show }: DashboardLogoutPopupProps) {
    const [ alert, setAlert ] = useState<AlertType>({
        message: "",
        show: false,
        type: "error"
    });
    const router = useRouter();
    const dispatch = useDispatch();

    const logoutSubmit = async () => {
        try {
            // const logout = await axios.get("http://localhost:3000/auth/logout");
            const logout = await axiosInstance.get("/auth/logout");
            const result = logout.data;

            if (result.statusCode === 500) showAlert("Failed to logout", "error")

            localStorage.removeItem("accessToken");
            return router.push("/login");
        } catch (err: unknown) {
            console.log(err);
        }
    }

    const showAlert = (mes: string, type: string) => {
        setAlert({
            message: mes,
            show: true,
            type: type
        });
        setTimeout(() => {
            setAlert((prev) => ({...prev, show: false}))
        }, 3000);
    }

    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <>
            <AlertAnimation message={alert.message} show={alert.show} type={alert.type}/>
            <div className="fixed flex items-center justify-center w-full h-screen z-20">
                <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

                <div className="absolute flex flex-col items-start justify-center w-[90%] h-[200px] px-6 bg-white rounded-lg lg:w-[450px]">

                    <p className="text-2xl font-semibold">Logout</p>
                    <p className="text-[#64748B] my-6">Are you sure want to logout?</p>
                    <div className="flex flex-row w-full items-center justify-end gap-2">
                        <div className="flex items-center justify-center w-[100px] h-[40px] border rounded-md cursor-pointer" onClick={() => {
                            dispatch(setDashboardLogout());
                        }}>Cancel</div>
                        <div className="flex items-center justify-center w-[100px] h-[40px] bg-[#2563EB] text-white border rounded-md cursor-pointer" onClick={() => {
                            logoutSubmit();
                            dispatch(reset());
                            router.push("/login");
                        }}>Logout</div>
                    </div>
                </div>

            </div>
        </>
    )
}