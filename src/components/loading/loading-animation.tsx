import { useEffect } from "react"

type LoadingAnimationType = {
    show: boolean
    opacity: "opacity-50" | "opacity-100"
}

export default function LoadingAnimation({ show, opacity }: LoadingAnimationType) {
    useEffect(() => {
        if (show) document.body.style.overflow = "hidden"
        if (!show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <div className="fixed flex items-center justify-center w-full z-20">
            <div className={`fixed top-0 w-full h-full bg-black ${opacity}`}/>

            <div className="absolute">
                <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
                    <div className="flex flex-col items-center justify-center w-[200px] h-[150px] bg-[#d1d1d1] rounded-xl border border-[#2563EB] lg:w-[300px] lg:h-[200px]">
                        <div className="w-5 h-5 animate-bounce  bg-[#2563EB] rounded-full"/>
                        <div className="w-5 h-12 animate-spin border-4 border-[#3B82F6] rounded-full "/>
                        <div className="text-base mt-3">Loading</div>
                    </div>
                </div>
            </div>

        </div>
    )
}