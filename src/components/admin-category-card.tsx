import { setAdminDeleteCategory, setAdminEditCategory } from "@/store/state";
import { useDispatch } from "react-redux"

type AdminCardType = {
    name: string
    created_at: string
    updated_at: string
}

export default function AdminCategoryCard({ name, created_at, updated_at }: AdminCardType) {
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-4 w-full h-[75px] border-b-[2px]">
            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">{ name }</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">{ created_at }</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">{ updated_at }</p>
            </div>

            <div className="flex items-center justify-center w-full gap-4">
                <p className="text-center text-[#2563EB] line-clamp-2 underline cursor-pointer" onClick={() => {
                    dispatch(setAdminEditCategory());
                }}>Edit</p>
                <p className="text-center text-[#EF4444] line-clamp-2 underline cursor-pointer" onClick={() => {
                    dispatch(setAdminDeleteCategory());
                }}>Delete</p>
            </div>
        </div>
    )
}