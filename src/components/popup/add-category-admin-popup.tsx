
export default function AddCategoryAdminPopup() {
    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

            <div className="absolute flex flex-col items-start justify-evenly w-[450px] h-[300px] px-6 bg-white rounded-lg">

                <p className="text-2xl font-semibold">Add Category</p>
                <form className="w-full">
                    <label className="my-2 font-semibold">Category</label>
                    <div className="flex items-center justify-start w-full h-[40px] pl-4 border rounded-md">
                        <input type="text" className="w-full bg-transparent" placeholder="Input Category"/>
                    </div>
                </form>
                <div className="flex flex-row w-full items-center justify-end gap-2">
                    <div className="flex items-center justify-center w-[75px] h-[40px] border rounded-md cursor-pointer">Cancel</div>
                    <div className="flex items-center justify-center w-[50px] h-[40px] bg-[#DC2626] text-white border rounded-md cursor-pointer">Add</div>
                </div>
            </div>

        </div>
    )
}