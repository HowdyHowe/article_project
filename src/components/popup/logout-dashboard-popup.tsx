
export default function LogoutDashboardPopup() {
    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

            <div className="absolute flex flex-col items-start justify-center w-[450px] h-[200px] px-6 bg-white rounded-lg">

                <p className="text-2xl font-semibold">Logout</p>
                <p className="text-[#64748B] my-6">Are you sure want to logout?</p>
                <div className="flex flex-row w-full items-center justify-end gap-2">
                    <div className="flex items-center justify-center w-[100px] h-[40px] border rounded-md cursor-pointer">Cancel</div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] bg-[#2563EB] text-white border rounded-md cursor-pointer">Logout</div>
                </div>
            </div>

        </div>
    )
}