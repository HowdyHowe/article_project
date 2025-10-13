"use client"

import z from "zod";
import axiosInstance from "@/components/axios-instance";
import AdminCategoryCard from "@/components/admin-category-card";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { setAdminAddCategory } from "@/store/state";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";
import { rootState } from "@/store";

const categorySchema = z.object({
    search: z.string()
});

type CategoryForm = z.infer<typeof categorySchema>;

type CategoryType = {
    category_id: string,
    name: string,
    created_at: string,
    updated_at: string
}

export default function AdminCategoryPage() {
    const {
        register,
        watch,
    } = useForm<CategoryForm>({
        resolver: zodResolver(categorySchema), defaultValues: {search: ""}
    })
    const [ result, setResult ] = useState<CategoryType[]>([])
    const [ debouncedQuery, setDebouncedQuery] = useState("");

    const callCategoryValue = useSelector((state: rootState) => state.stateData.callCategoryValue);
    const categoryValue = watch("search");
    const dispatch = useDispatch();

    // debounce timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(categoryValue);
        }, 500);
        return () => clearTimeout(timer);
    }, [categoryValue]);

    useEffect (() => {
        async function fetchData(data: CategoryForm) {
            const validateSearch = categorySchema.parse(data);
            const result = await axiosInstance.post("/category/searchCategory", validateSearch);
            const articles = result.data?.data?.result || []

            setResult(articles);
            console.log(articles);
        }

        fetchData({ search: debouncedQuery });
    },[debouncedQuery, callCategoryValue])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-[75px]">

            <div className="flex flex-col items-center justify-start w-[97%] min-h-[97%] my-4 bg-white border rounded-xl">
                <div className="flex items-center justify-start w-full h-[75px] px-4 text-lg border-b">
                    Total Category: 25
                </div>
                <div className="flex flex-row items-center justify-between w-full h-[100px] px-4 border-b">
                    <form className="flex flex-row gap-2">
                        <div className="flex items-center justify-start w-[250px] h-[40px] px-4 border rounded-lg">
                            <FaMagnifyingGlass size={13} className="mr-2 text-[#aeaeaf]"/>
                            <input {...register("search")} type="text" placeholder="Search Category" className="bg-transparent w-full"/>
                        </div>
                    </form>

                    <div className="flex items-center justify-center w-[150px] h-[50px] bg-[#2563EB] text-white border rounded-lg cursor-pointer" onClick={
                        () => {
                            dispatch(setAdminAddCategory());
                        }
                    }>
                        <LuPlus size={20} className="mr-2"/>
                        <p>Add Category</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 w-full h-[50px] bg-[#F3F4F6] border-b">
                    <p className="flex items-center justify-center font-semibold">Category</p>
                    <p className="flex items-center justify-center font-semibold">Created At</p>
                    <p className="flex items-center justify-center font-semibold">Updated At</p>
                    <p className="flex items-center justify-center font-semibold">Action</p>
                </div>

                <div className="grid grid-cols-1 w-full min-h-[60%] overflow-auto scrollbar-thin scrollbar-thumb-[#2563EB] scrollbar-track-transparent">
                    {
                        result.length !== 0
                        ?   result.map((category, index) => (
                                <AdminCategoryCard key={index} name={category.name} created_at={
                                    new Date(category.created_at).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    })
                                } updated_at={
                                    new Date(category.updated_at).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    })
                                }/>
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