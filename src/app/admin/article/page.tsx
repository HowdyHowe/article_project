export default function AdminArticlePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#F3F4F6]">
            <div className="flex flex-col items-center justify-start w-[97%] h-[95%] bg-white border rounded-xl">
                <div className="flex items-center justify-start w-full h-[75px] px-4 text-lg border-b">
                    Total Articles: 25
                </div>
                <div className="flex flex-row items-center justify-between w-full h-[100px] px-4 border-b">
                    <form className="flex flex-row gap-2">
                        <div className="flex items-center justify-center w-[125px] h-[40px] px-2 border rounded-lg">
                            <select className="w-full bg-transparent">
                                <option value="">contoh</option>
                                <option value="">contoh</option>
                                <option value="">contoh</option>
                                <option value="">contoh</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-start w-[250px] h-[40px] px-4 border rounded-lg">
                            <input type="text" placeholder="Search Article" className="bg-transparent"/>
                        </div>
                    </form>

                    <div className="flex items-center justify-center w-[150px] h-[50px] bg-[#2563EB] text-white border rounded-lg">Add Article</div>
                </div>

                <div className="grid grid-cols-5 w-full h-[50px] bg-[#F3F4F6] border-b">
                    <p className="flex items-center justify-center font-semibold">Thumbnail</p>
                    <p className="flex items-center justify-center font-semibold">Title</p>
                    <p className="flex items-center justify-center font-semibold">Category</p>
                    <p className="flex items-center justify-center font-semibold">Created At</p>
                    <p className="flex items-center justify-center font-semibold">Action</p>
                </div>
            </div>
        </div>
    );
}