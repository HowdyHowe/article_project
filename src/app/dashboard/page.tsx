import ArticleCard from "@/components/article-card";
import AddCategoryAdminPopup from "@/components/popup/add-category-admin-popup";
import DeleteArticlesAdminPopup from "@/components/popup/delete-articles-admin-popup";
import EditCategoryAdminPopup from "@/components/popup/edit-category-admin-popup";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-start w-full">

            <EditCategoryAdminPopup/>
            <header className="relative flex flex-col items-center justify-center w-full">
                <img src="/images/headerdash.jpg" alt="header background" className="absolute top-[75px] w-full h-[600px] object-cover lg:top-0 lg:h-[600px]"/>
                <div className="absolute top-[75px] w-full h-[600px] bg-[#2563EB] opacity-85 lg:top-0 lg:h-[600px]"/>

                <div className="absolute top-0 flex flex-row items-center justify-between w-full h-[75px] px-[4%] lg:h-[100px]">
                    <img src="/images/logo-white.png" alt="logo" className="hidden lg:flex w-[150px]"/>
                    <img src="/images/logo-black.png" alt="logo" className="lg:hidden w-[125px]"/>

                    <div className="flex flex-row items-center justify-center cursor-pointer">
                        <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#BFDBFE] text-xl rounded-full">J</div>
                        <p className="hidden lg:flex ml-4 text-lg text-white underline">James bond</p>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center w-[95%] h-[500px] mt-[100px] text-white text-center z-10 lg:w-[45%]">
                    <p className="text-lg">Blog Genzet</p>
                    <p className="mt-4 text-5xl lg:text-6xl">The Journal: Design Resources, Interviews, and Industry News</p>
                    <p className="mt-6 text-xl font-thin lg:text-3xl">Your daily dose of design insight!</p>

                    {/* sizedbox for padding */}
                    <div className="h-[75px]"/>

                    <div className="flex items-center justify-center w-full h-[120px] px-3 bg-[#3B82F6] rounded-xl lg:h-[60px]">
                        <form className="flex flex-col items-center justify-center gap-3 w-full lg:flex-row">
                            <div className="flex items-center justify-center w-full h-[40px] px-3 bg-white rounded-lg lg:w-[30%]">
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

            {/* sizedbox for padding */}
            <div className="h-[50px]"/>

            <main className="flex flex-col items-center justify-center w-[85%]">
                <p className="w-full mb-6">Showing: 20 of 40 articles</p>
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
                    {
                        Array.from({length: 9}, (_, index) => (
                            <ArticleCard key={index}/>
                        ))
                    }
                </div>

                {/* sizedbox for padding */}
                <div className="h-[50px]"/>

                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <LuChevronLeft size={20} className="mr-2"/>
                        <p className="font-semibold">Previous</p>
                    </div>

                    <div className="flex flex-row items-center justify-center lg:w-[200px]">
                        <div className="flex items-center justify-center w-[50px] h-[50px]">1</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">2</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px]">3</div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <p className="font-semibold">Next</p>
                        <LuChevronRight size={20} className="ml-2"/>
                    </div>
                </div>
            </main>

            {/* sizedbox for padding */}
            <div className="h-[75px]"/>

            <footer className="flex flex-col items-center justify-center w-full h-[75px] bg-[#2563EB] opacity-85 lg:flex-row lg:h-[100px]">
                <img src="/images/logo-white.png" alt="logo" className="w-[110px] mb-1 lg:w-[150px] lg:mb-0"/>
                <p className="ml-4 text-xs text-white lg:text-base">@ 2025 Blog genzet. All right reserved.</p>
            </footer>
        </div>
    );
}