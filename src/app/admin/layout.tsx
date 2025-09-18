export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-row items-start justify-center w-full h-full">
                <aside className="flex flex-col items-center justify-start w-[17%] h-full pt-8 bg-[#2563EB]">
                    <div className="flex flex-col items-start justify-center w-[90%] text-lg">
                        <div className="flex items-center justify-start w-full h-[40px] px-4">
                            <img src="/images/logo-white.png" alt="logo" className="w-[150px]"/>
                        </div>

                        <div className="flex items-center justify-start w-full h-[40px] mt-8 px-4 text-white bg-[#3B82F6] rounded-md">
                            <img src="/images/article-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Articles</p>
                        </div>
                        <div className="flex items-center justify-start w-full h-[40px] mt-3 px-4 text-white rounded-md">
                            <img src="/images/category-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Category</p>
                        </div>
                        <div className="flex items-center justify-start w-full h-[40px] mt-3 px-4 text-white rounded-md">
                            <img src="/images/logout-icon.png" alt="article logo" className="w-[20px] mr-4"/>
                            <p>Logout</p>
                        </div>
                    </div>

                </aside>
                <div className="flex flex-col w-full h-full">
                    <header className="flex flex-row items-center justify-between w-full h-[75px] px-[2%] border-b">
                        <img src="/images/logo-black.png" alt="logo" className="w-[125px]"/>

                        <div className="flex flex-row items-center justify-center cursor-pointer">
                            <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                            <p className="flex ml-4 text-lg text-black underline">James bond</p>
                        </div>
                    </header>

                    {children}

                </div>
            </div>
        </div>
    );
}