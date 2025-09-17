export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-start w-full h-screen">
            <header className="relative flex flex-col items-center justify-center w-full">
                <img src="/images/headerdash.jpg" alt="header background" className="absolute top-0 w-full h-[700px] object-cover"/>
                <div className="absolute top-0 w-full h-[700px] bg-[#2563EB] opacity-85"/>

                <div className="absolute top-0 flex flex-row items-center justify-between w-full h-[100px] px-[4%]">
                    <img src="/images/logo-white.png" alt="logo" className="w-[150px]"/>

                    <div className="flex flex-row items-center justify-center">
                        <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                        <p className="ml-4 text-xl text-white underline">James bond</p>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center w-[45%] h-[600px] mt-[100px] text-white text-center z-10">
                    <p className="text-lg">Blog Genzet</p>
                    <p className="mt-4 text-6xl">The Journal: Design Resources, Interviews, and Industry News</p>
                    <p className="mt-6 text-3xl font-thin">Your daily dose of design insight!</p>

                    {/* sizedbox for padding */}
                    <div className="h-[50px]"/>

                    <div className="flex items-center justify-center w-full h-[60px] px-3 bg-[#3B82F6] rounded-xl">
                        <form className="flex flex-row items-center justify-center gap-3 w-full">
                            <div className="flex items-center justify-center w-[30%] h-[40px] px-3 bg-white rounded-lg">
                                <select className="w-full text-black bg-transparent">
                                    <option value="contoh">contoh</option>
                                    <option value="contoh">contoh</option>
                                    <option value="contoh">contoh</option>
                                    <option value="contoh">contoh</option>
                                </select>
                            </div>

                            <div className="w-full text-black px-3 bg-white rounded-lg">
                                <input type="text" className="w-full h-[40px] bg-transparent" placeholder="Search Articles"/>
                            </div>
                        </form>
                    </div>
                </div>

            </header>
        </div>
    );
}