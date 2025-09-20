export default function LayoutArticle({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col justify-start w-full">
            <header className="flex flex-row items-center justify-between w-full h-[75px] px-[4%] border-b lg:h-[125px]">
                <img src="/images/logo-black.png" alt="logo" className="w-[125px]"/>

                <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">P</div>
                    <p className="hidden lg:flex ml-4 text-lg text-black underline">Preview Page</p>
                </div>

            </header>

            {/* sizedbox for padding */}
            <div className="h-[50px]"/>

            {children}

            {/* sizedbox for padding */}
            <div className="h-[75px]"/>

            <footer className="flex flex-col items-center justify-center w-full h-[75px] bg-[#2563EB] opacity-85 lg:flex-row lg:h-[100px]">
                <img src="/images/logo-white.png" alt="logo" className="w-[110px] mb-1 lg:w-[150px] lg:mb-0"/>
                <p className="ml-4 text-xs text-white lg:text-base">@ 2025 Blog genzet. All right reserved.</p>
            </footer>
        </div>
    );
}