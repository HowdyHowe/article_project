import { setAdminDeleteArticle } from "@/store/state";
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux";

export default function AdminArticleCard({ title }: { title: string }) {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-5 w-full h-[75px] border-b-[2px]">
            <div className="flex items-center justify-center">
                <img src="/images/headerdash.jpg" className="w-[55px] h-[55px] rounded-md object-cover"/>
            </div>

            <div className="flex items-center justify-start w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">{ title }</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">Technology</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">April 14, 2025 10:55:12</p>
            </div>

            <div className="flex items-center justify-center w-full gap-4">
                <p className="text-center text-[#2563EB] line-clamp-2 underline cursor-pointer" onClick={() => router.push("/admin/preview")}>Preview</p>
                <p className="text-center text-[#2563EB] line-clamp-2 underline cursor-pointer" onClick={() => {
                    router.push("/admin/article/edit")
                }}>Edit</p>
                <p className="text-center text-[#EF4444] line-clamp-2 underline cursor-pointer" onClick={() => {
                    dispatch(setAdminDeleteArticle());
                }}>Delete</p>
            </div>
        </div>
    )
}