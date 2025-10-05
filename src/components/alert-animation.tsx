import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AlertAnimationType = {
    message: string,
    show: boolean
};

export default function AlertAnimation({ message, show }: AlertAnimationType) {
    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return(
        <AnimatePresence mode="wait">
            <motion.div
                key="box"
                initial={ { opacity: 0, y: -40 } }
                animate={ { opacity: 1, y: 0 } }
                exit={ { opacity: 0, y: -40 } }
                transition={ { duration: 0.3 } }
                className="absolute top-[10px]"
            >
                <div className="flex items-center justify-center w-[200px] h-[50px] bg-[#2563EB] text-white rounded-xl">
                    { message }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}