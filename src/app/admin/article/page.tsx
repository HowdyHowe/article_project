"use client"

import z from "zod";
import AdminArticleCard from "@/components/admin-article-card";
import { reset, setAdminPage } from "@/store/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";

const articleschema = z.object({
    article: z.string(),
    category: z.string(),
})

type ArticleForm = z.infer<typeof articleschema>

export default function AdminArticlePage() {
    const {
        register,
        watch,
        formState: { errors }
    } = useForm<ArticleForm>({
        resolver: zodResolver(articleschema)
    });

    const [ debouncedQuery, setDebouncedQuery ] = useState({
        article: "",
        category: ""
    });

    const router = useRouter();
    const dispatch = useDispatch();
    const articleValue = watch("article");
    const categoryValue = watch("category");

    // debouce timer
    useEffect(() => {
        const timer = setTimeout(() => {
                setDebouncedQuery({
                    article: articleValue,
                    category: categoryValue,
                });
            }, 500);
            return () => clearTimeout(timer);
    }, [articleValue, categoryValue])

    useEffect(() => {
        // note: put the fetching data here later
        console.log("article: ", articleValue)
        console.log("category: ", categoryValue)
    }, [debouncedQuery])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-[75px]">
            <div className="flex flex-col items-center justify-start w-[97%] min-h-[97%] my-4 bg-white border rounded-xl">
                <div className="flex items-center justify-start w-full h-[75px] px-4 text-lg border-b">
                    Total Articles: 25
                </div>
                <div className="flex flex-row items-center justify-between w-full h-[100px] px-4 border-b">
                    <form  className="flex flex-row gap-2">
                        <div className="flex items-center justify-center w-[125px] h-[40px] px-2 border rounded-lg">
                            <select  {...register("category")} className="w-full bg-transparent">
                                <option value="">All</option>
                                <option value="contoh1">contoh1</option>
                                <option value="contoh2">contoh2</option>
                                <option value="depan">depan</option>
                                <option value="contoh3">contoh3</option>
                            </select>
                        </div>
                        {/* Error sign for article */}
                        {errors.article && <p className="text-sm text-[#DC2626]">{errors.article.message}</p>}

                        <div className="flex items-center justify-start w-[250px] h-[40px] px-4 border rounded-lg">
                            <FaMagnifyingGlass size={13} className="mr-2 text-[#aeaeaf]"/>
                            <input {...register("article")} type="text" placeholder="Search Article" className="bg-transparent"/>
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

                <div className="grid grid-cols-1 w-full min-h-[60%] overflow-auto scrollbar-thin scrollbar-thumb-[#2563EB] scrollbar-track-transparent">
                    {
                        Array.from({length: 10}, (_, index) =>
                            <AdminArticleCard key={index}/>
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
                        <div className="flex items-center justify-center w-[50px] h-[50px]">1</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">2</div>
                        <div className="flex items-center justify-center w-[50px] h-[50px]">3</div>
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