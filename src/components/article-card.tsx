export default function ArticleCard() {
    return (
        <div className="flex flex-col items-start justify-start">
            <div className="w-full h-[200px] bg-black rounded-xl"/>
            <p className="mt-4 text-[#475569]">August 17, 2025</p>
            <p className="my-2 text-xl font-semibold">Title contoh contoh contoh contoh contoh contoh contoh contoh</p>
            <p className="mb-2 text-[#475569]">content content content content content content content content content content content content content content content content content content content content</p>

            <div className="flex flex-row gap-2">
                <div className="max-w-[200px] py-1 px-5 text-center text-[#1E3A8A] line-clamp-1 bg-[#BFDBFE] rounded-2xl">
                    Tag
                </div>
                <div className="max-w-[200px] py-1 px-5 text-center text-[#1E3A8A] line-clamp-1 bg-[#BFDBFE] rounded-2xl">
                    Tag number 2
                </div>
            </div>
        </div>
    )
}