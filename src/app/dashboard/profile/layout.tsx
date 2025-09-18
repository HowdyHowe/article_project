export default function LayoutProfile({ children }: {children: React.ReactNode}) {
    return (
        <div className="relative flex flex-col justify-start w-full h-screen">
            <header className="absolute top-0 flex flex-row items-center justify-between w-full h-[75px] px-[4%] border-b lg:h-[125px]">
                <img src="/images/logo-black.png" alt="logo" className="w-[125px]"/>

                <div className="flex flex-row items-center justify-center cursor-pointer">
                    <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                    <p className="hidden lg:flex ml-4 text-lg text-black underline">James bond</p>
                </div>
            </header>

            {children}

            <footer className="absolute bottom-0 flex flex-col items-center justify-center w-full h-[75px] bg-[#2563EB] opacity-85 lg:flex-row lg:h-[100px]">
                <img src="/images/logo-white.png" alt="logo" className="w-[110px] mb-1 lg:w-[150px] lg:mb-0"/>
                <p className="ml-4 text-xs text-white lg:text-base">@ 2025 Blog genzet. All right reserved.</p>
            </footer>
        </div>
    );
}