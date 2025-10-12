"use client"

import z from "zod";
import axiosInstance from "@/components/axios-instance";
import AdminArticleCard from "@/components/admin-article-card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";

const searchCategorySchema = z.object({
    category_id: z.string(),
})

const searchArticleSchema = searchCategorySchema.extend({
    search: z.string()
})

type ArticleForm = z.infer<typeof searchArticleSchema>

type CategoryType = {
    category_id : string,
    name        : string,
    created_at  : string,
    updated_at  : string,
}

type ArticleType = {
    article_id  : string,
    title       : string,
    content     : string,
    created_at  : string,
    updated_at  : string,
    category    : CategoryType,
    author      : {
        user_id     : string,
        username    : string,
    }
}

export default function AdminArticlePage() {
    const { register, watch } = useForm<ArticleForm>({ resolver: zodResolver(searchArticleSchema) });
    const [ debouncedQuery, setDebouncedQuery ] = useState({ search: "", category_id: "" });
    const [ categoryResult, setCategoryResult ] = useState<CategoryType[]>([])
    const [ articleResult, setArticleResult ] = useState<ArticleType[]>([]);
    const [ page, setPage ] = useState({ curpage: 1, totalPage: 1 })

    const router = useRouter();
    const articleValue = watch("search");
    const categoryValue = watch("category_id");

    // debouce timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery({
                search: articleValue,
                category_id: categoryValue,
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [articleValue, categoryValue])

    useEffect(() => {
        async function fetchData (searchArticle: ArticleForm) {
            const articleSearch = searchArticleSchema.parse(searchArticle);
            const articleResult = await axiosInstance.post("/article/searchArticle", articleSearch);
            const categoryResult = await axiosInstance.post("/category/searchCategory");
            const category = categoryResult.data?.data?.result || [];
            const articles = articleResult.data?.data?.result || [];

            setPage({ curpage: articleResult.data?.data?.page, totalPage: articleResult.data?.data?.total_page })
            setCategoryResult(category);
            setArticleResult(articles);
        }

        fetchData(debouncedQuery);
    }, [debouncedQuery])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-[75px]">
            <div className="flex flex-col items-center justify-start w-[97%] min-h-[97%] my-4 bg-white border rounded-xl">
                <div className="flex items-center justify-start w-full h-[75px] px-4 text-lg border-b">
                    Total Articles: 25
                </div>
                <div className="flex flex-row items-center justify-between w-full h-[100px] px-4 border-b">
                    <form  className="flex flex-row gap-2">
                        <div className="flex items-center justify-center w-[150px] h-[40px] px-2 border rounded-lg">
                            <select  {...register("category_id")} className="w-full bg-transparent">
                                <option value="">All Categories</option>
                                {
                                    categoryResult.map((category, index) => (
                                        <option key={index} value={category.category_id}>{ category.name }</option>
                                    ))

                                }
                            </select>
                        </div>
                        <div className="flex items-center justify-start w-[250px] h-[40px] px-4 border rounded-lg">
                            <FaMagnifyingGlass size={13} className="mr-2 text-[#aeaeaf]"/>
                            <input {...register("search")} type="text" placeholder="Search Article" className="bg-transparent"/>
                        </div>
                    </form>

                    <div className="flex items-center justify-center w-[150px] h-[50px] bg-[#2563EB] text-white border rounded-lg cursor-pointer" onClick={() => {
                        router.push("/admin/article/add")
                    }}>
                        <LuPlus size={20} className="mr-2"/>
                        <p>Add Article</p>
                    </div>
                </div>

                <div className="grid grid-cols-5 w-full h-[50px] bg-[#F3F4F6] border-b">
                    <p className="flex items-center justify-center font-semibold">Thumbnail</p>
                    <p className="flex items-center justify-center font-semibold">Title</p>
                    <p className="flex items-center justify-center font-semibold">Category</p>
                    <p className="flex items-center justify-center font-semibold">Created At</p>
                    <p className="flex items-center justify-center font-semibold">Action</p>
                </div>

                <div className="flex flex-col w-full min-h-[60%] overflow-auto scrollbar-thin scrollbar-thumb-[#2563EB] scrollbar-track-transparent">
                    {
                        articleResult.length !== 0
                            ?   articleResult.map((article, index) => (
                                    <AdminArticleCard key={index} title={article.title} category={article.category.name} date={
                                        new Date(article.created_at).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit"
                                        })
                                    } />
                                ))
                            :   (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <p className="font-semibold text-xl text-black">No Result</p>
                                    </div>
                                )
                    }
                </div>

                {/* sizedbox for padding */}
                <div className="h-[30px]"/>

                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <LuChevronLeft size={20} className="mr-2"/>
                        <p className="font-semibold">Previous</p>
                    </div>

                    <div className="flex flex-row items-center justify-center lg:w-[200px]">
                        <div className="flex items-center justify-center w-[50px] h-[50px]">{ page.curpage - 1 <= 0 || !Number.isNaN(page.curpage) ? "" : page.curpage - 1 }</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">{ page.curpage || 1 }</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px]">{ page.curpage + 1 > page.totalPage || !Number.isNaN(page.curpage) ? "" : page.curpage + 1 }</div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-[100px]">
                        <p className="font-semibold">Next</p>
                        <LuChevronRight size={20} className="ml-2"/>
                    </div>
                </div>

                {/* sizedbox for padding */}
                <div className="h-[30px]"/>

            </div>
        </div>
    );
}