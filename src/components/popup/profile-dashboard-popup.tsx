import { LuLogOut } from "react-icons/lu"

export default function DashboardProfilePopup() {
    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

            <div className="absolute top-[75px] right-[4%] grid grid-rows-2 w-[250px] h-[100px] bg-white rounded-lg lg:top-[100px]">
                <div className="flex items-center justify-start px-4 border-b cursor-pointer">My Account</div>
                <div className="flex items-center justify-start px-4 text-red-600 cursor-pointer">
                    <LuLogOut className="mr-3"/>
                    <p>Logout</p>
                </div>
            </div>

        </div>
    )
}