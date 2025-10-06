"use client";

import z from "zod";
import TipTapEditor from "@/components/custom-rte";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setAdminPage } from "@/store/state";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuArrowLeft, LuPlus, LuX } from "react-icons/lu";

const editArticleSchema = z.object({
    images: z.instanceof(File, {message: "File is required"})
            .refine((file) => file.size <= 5 * 1024 * 1024, { message: "Maximun file size is 5 megabyte.",
            }).refine((file) => ["image/png", "image/jpeg"].includes(file.type), {
                message: "Only .jpg and .png format are supported"
            }),
    title: z.string(),
    category: z.string(),
    content: z.string()
});

type EditArticleForm = z.infer<typeof editArticleSchema>

export default function AdminEditArticlePage({ article }: {article?: EditArticleForm}) {
    const [isDragging, setIsDragging] = useState(false)
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<EditArticleForm>({
        resolver: zodResolver(editArticleSchema),
    });

    const onSubmit = (data: EditArticleForm) => {
        console.log("title: ", data.title);
        console.log("category: ", data.category);
        console.log("content: ", data.content);
    }

    return (
        <div className="flex items-center justify-center w-full h-full pt-[75px]">
            <div className="flex flex-col items-center justify-start w-[95%] h-[95%] px-10 bg-[#F9FAFB] border rounded-xl">
                <div className="flex items-center justify-start w-full h-[75px] text-lg">
                    <LuArrowLeft size={25} className="mr-4 cursor-pointer"  onClick={() => {
                        dispatch(setAdminPage("article"));
                        router.push("/admin/article")
                    }}/>
                    <p className="text-xl">
                        Create Articles
                    </p>
                </div>

                {/* sizedbox for padding */}
                <div className="h-[25px]"/>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[#2563EB] scrollbar-track-transparent">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold">Thumbnail</label>
                        <input {...register("images")} id="image" type="file" accept="images/*" onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                console.log("berhasil")
                            }
                        }}
                        className="hidden"/>

                        <div
                            className={`flex flex-col items-center justify-center w-[320px] h-[250px] border-2 border-dashed rounded-lg p-4 transition ${isDragging ? "border-blue-500 bg-blue-50": "border-gray-300 bg-white hover:bg-gray-100"}`} 
                            onDragLeave={(e) => {
                                e.preventDefault();
                                setIsDragging(false);
                                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                    console.log("images")
                                }
                            }}
                        >
                            {
                                previewImage ?
                                (
                                    <div className="relative">
                                        <LuX/>
                                        <img src={previewImage} alt="Preview image" className="object-cover w-[200px] h-full rounded-md"/>
                                    </div>
                                ) :
                                (
                                    <>
                                        <LuPlus/>
                                        <p
                                            className="text-base text-[#64748B] underline cursor-pointer"
                                            onClick={() => document.getElementById("image")?.click()}
                                            onDragOver={(e) => {
                                                e.preventDefault();
                                                setIsDragging(true);
                                            }}
                                        >
                                            Click here to select the file
                                        </p>
                                        <p className="text-base text-[#64748B]">Support file type: .jpg or .png</p>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    {/* sizedbox for padding */}
                    <div className="min-h-[30px]"/>

                    <div className="flex flex-col w-full">
                        <label className="text-lg font-semibold">Title</label>
                        <div className="flex items-center w-full h-[50px] bg-white px-4 border rounded-lg">
                            <input {...register("title")} type="text" className="w-full h-[50px] bg-transparent text-lg focus:outline-none focus:ring-0 resize-none" placeholder="Input title"/>
                        </div>
                    </div>

                    {/* sizedbox for padding */}
                    <div className="min-h-[30px]"/>

                    <div className="flex flex-col w-full">
                        <label className="text-lg font-semibold">Category</label>
                        <div className="flex items-center w-full h-[50px] bg-white px-4 border rounded-lg">
                            <select {...register("category")} className="w-full h-[50px] bg-transparent text-lg focus:outline-none focus:ring-0 resize-none">
                                <option value="">contoh1</option>
                                <option value="">contoh2</option>
                                <option value="">contoh3</option>
                                <option value="">contoh4</option>
                            </select>
                        </div>
                        <div className="flex flex-row text-lg text-[#64748B]">
                            The existing category list can be seen it the
                                <p className="mx-2 text-[#2563EB] underline">category</p>
                            menu
                        </div>
                    </div>

                    {/* sizedbox for padding */}
                    <div className="min-h-[30px]"/>

                    <div className="w-full">
                        <label className="text-lg font-semibold">Content</label>
                        <Controller
                            name="content"
                            control={control}
                            rules={{required: "Content is required"}}
                            render={({field}) => (
                                <TipTapEditor
                                    content={field.value || ""}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                    {/* sizedbox for padding */}
                    <div className="min-h-[25px]"/>

                    <div className="flex flex-row items-center justify-end gap-2 w-full h-full">
                        <div className="flex items-center justify-center w-[125px] h-[50px] bg-white text border rounded-md cursor-pointer" onClick={
                            () => {
                                dispatch(setAdminPage("article"))
                                router.back()
                            }
                        }>Cancel</div>
                        <div className="flex items-center justify-center w-[125px] h-[50px] bg-[#E2E8F0] text border rounded-md cursor-pointer" onClick={
                            () => {
                                router.push("/preview")
                            }
                        }>Preview</div>
                        <div className="flex items-center justify-center w-[125px] h-[50px] bg-[#2563EB] text-white text border rounded-md">Upload</div>
                    </div>

                </form>

                {/* sizedbox for padding */}
                <div className="min-h-[25px]"/>

            </div>
        </div>
    )
}