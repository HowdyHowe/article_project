import AdminArticleCard from "@/components/admin-article-card";
import ArticleCard from "@/components/article-card";

export default function DashboardArticlePage() {
    return (
        <main className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-center w-[85%] text-center lg:w-[45%]">
                <div className="flex flex-row text-sm text-[#475569] lg:text-base">February 4, 2025 <p className="mx-1 lg:mx-4">•</p> Created By Admin</div>
                <p className="mt-4 text-2xl font-semibold lg:text-4xl">Figma`s New Dev Mode: A Game-Changer For Designer & Developers</p>
            </div>

            <img src="/images/headerdash.jpg" alt="article image" className="w-[85%] h-[250px] mt-6 object-cover rounded-xl lg:h-[600px]" loading="lazy"/>

            {/* sizedbox for padding */}
            <div className="h-[30px]"/>

            <article className="flex items-center justify-start w-[85%]">
                <p>contoh isi</p>
            </article>

            {/* sizedbox for padding */}
            <div className="h-[50px]"/>

            <div className="flex flex-col items-start justify-center w-[85%]">
                <p className="text-xl font-semibold">Other Articles</p>
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
                    {
                        Array.from({length: 3}, (_, index) => (
                            <ArticleCard key={index}/>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}