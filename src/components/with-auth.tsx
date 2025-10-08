import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function WithAuth<P extends object>(Component: React.ComponentType<P>) {
    return function ProtectedRotue(props: P) {

        useEffect(() => {
            const token = localStorage.getItem("accessToken");
            if(!token) redirect("/login");

        }, [])

        return <Component {...props} />
    };
}