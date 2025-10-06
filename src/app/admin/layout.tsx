"use client"

import LoadingAnimation from "@/components/loading/loading-animation";
import { useEffect } from "react";
import { rootState } from "@/store";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { hideLoadingAnimation, showLoadingAnimation } from "@/store/state";

export default function LayoutAdmin({ children }: {children: React.ReactNode}) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const loadingAnimation = useSelector((state: rootState) => state.stateData.loadingAnimation);

    useEffect(() => {
        dispatch(showLoadingAnimation());
        const timeout = setTimeout(() => {
            dispatch(hideLoadingAnimation());
        }, 700);

        return () => clearTimeout(timeout);
    }, [pathname, dispatch]);

    return (
        <div className="relative w-full min-h-screen">

            <LoadingAnimation message="Loading" show={loadingAnimation}/>
            {children}
        </div>
    )
}