import { setAdminDeleteArticle } from "@/store/state";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type AdminDeleteArticlePopupProps = {
    show: boolean;
}

export default function AdminDeleteArticlesPopup({ show }: AdminDeleteArticlePopupProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

            <div className="absolute flex flex-col items-start justify-center w-[450px] h-[200px] px-6 bg-white rounded-lg">

                <p className="text-2xl font-semibold">Delete Article</p>
                <p className="text-[#64748B] my-4">Deleting this article is permanent and cannot be undone. All related content will be removed</p>
                <div className="flex flex-row w-full items-center justify-end gap-2">
                    <div className="flex items-center justify-center w-[100px] h-[40px] border rounded-md cursor-pointer" onClick={() => {
                        dispatch(setAdminDeleteArticle());
                    }}>Cancel</div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] bg-[#DC2626] text-white border rounded-md cursor-pointer">Delete</div>
                </div>
            </div>

        </div>
    )
}