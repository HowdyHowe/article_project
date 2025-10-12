import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AlertAnimationType = {
    message: string,
    show: boolean,
    type: string
};

export default function AlertAnimation({ message, show, type }: AlertAnimationType) {
    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return(
        <AnimatePresence>
            <motion.div
                key="box"
                initial={ { opacity: 0, y: -40 } }
                animate={ { opacity: 1, y: 0 } }
                exit={ { opacity: 0, y: -40 } }
                transition={ { duration: 0.3 } }
                className="absolute top-[10px] z-50"
            >
                <div className={`flex items-center justify-center text-center w-[200px] h-[50px] text-white rounded-lg ${
                    type === "success"
                        ? "bg-[#2563EB]"
                        : type === "error"
                        ? "bg-[#dc2626]"
                        : type === "info"
                        ? "bg-[#eab308]"
                        : "bg-white"
                }`}>
                    { message }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}