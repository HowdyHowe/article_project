export default function AdminArticleCard() {
    return (
        <div className="grid grid-cols-5 w-full h-[75px] border-b-[2px]">
            <div className="flex items-center justify-center">
                <img src="/images/headerdash.jpg" className="w-[55px] h-[55px] rounded-md object-cover"/>
            </div>

            <div className="flex items-center justify-start w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">Contoh Judul Artikel</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">Technology</p>
            </div>

            <div className="flex items-center justify-center w-full px-4">
                <p className="w-full max-h-[3rem] text-center line-clamp-2">April 14, 2025 10:55:12</p>
            </div>

            <div className="flex items-center justify-center w-full gap-4">
                <p className="text-center text-[#2563EB] line-clamp-2 underline cursor-pointer">Preview</p>
                <p className="text-center text-[#2563EB] line-clamp-2 underline cursor-pointer">Edit</p>
                <p className="text-center text-[#EF4444] line-clamp-2 underline cursor-pointer">Delete</p>
            </div>
        </div>
    )
}