import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WithAuth<P extends object>(Component: React.ComponentType<P>) {
    return function ProtectedRotue(props: P) {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem("accessToken");
            if(!token) router.replace("/login");

        }, [router])

        return <Component {...props} />
    };
}