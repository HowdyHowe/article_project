import z from "zod";
import axios from "axios";
import axiosInstance from "../axios-instance";
import AlertAnimation from "../alert-animation";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import { reset, setAdminAddCategory, setAdminCallCategoryValue } from "@/store/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type AdminAddCategoryPopupProps = {
    show: boolean;
}

type AlertType = {
    message: string;
    show: boolean;
    type: string
}

const categorySchema = z.object({
    name: z.string().min(3, "Username must be at least 3 letter"),
});

type AddCategoryForm = z.infer<typeof categorySchema>

export default function AdminAddCategoryPopup({ show }: AdminAddCategoryPopupProps) {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm<AddCategoryForm>({ resolver: zodResolver(categorySchema), defaultValues: { name: "" } });
    const [ alert, setAlert ] = useState<AlertType>({ message: "", show: false,type: "error"});
    const router = useRouter();
    const dispatch = useDispatch();

    const showAlert = (mes: string, type: string) => {
        setAlert({
            message: mes,
            show: true,
            type: type
        });
        setTimeout(() => {
            setAlert((prev) => ({...prev, show: false}))
        }, 3000);
    };

    const onSubmit = async (data: AddCategoryForm) => {
        try {
            const res = await axiosInstance.post("/category/addCategory", data);
            const result = res.data

            if (result.statusCode === 500) return showAlert("Server error", "error");
            if (result.statusCode === 409) return showAlert("Category already exist", "error");
            if (result.statusCode === 400) return showAlert(result.data.error, "error");
            if (result.statusCode === 200) {
                resetField("name");
                dispatch(reset());
                dispatch(setAdminCallCategoryValue());
                return showAlert("Category successfully created", "success");
            }

            console.log("Reset Disini: ", res)

            showAlert("Error", "error");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const message = err.response?.data?.message || err.message || "Network Error";
                return showAlert(message, "error");
            } else {
                return showAlert("Unexpected error occurred", "error");
            }

        }
    }

    useEffect(() => {
        if (!show) document.body.style.overflow = "hidden"
        if (show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">

            <AlertAnimation message={alert.message} show={alert.show} type={alert.type}/>
            <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

            <div className="absolute flex flex-col items-start justify-evenly w-[450px] h-[275px] px-6 bg-white rounded-lg">

                <p className="text-2xl font-semibold">Add Category</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <label className="font-semibold">Category</label>
                    <div className="flex items-center justify-start w-full h-[40px] pl-4 border rounded-md">
                        <input {...register("name")} type="text" className="w-full bg-transparent" placeholder="Input Category"/>
                    </div>
                    {/* Error sign for username */}
                    {errors.name && <p className="text-sm text-[#DC2626]">{errors.name.message}</p>}

                    <div className="flex flex-row w-full items-center justify-end mt-2 gap-2">
                        <div className="flex items-center justify-center w-[75px] h-[40px] border rounded-md cursor-pointer" onClick={
                            () => {
                                resetField("name");
                                dispatch(setAdminAddCategory());
                            }
                        }>
                            Cancel
                        </div>
                        <button type="submit" className="flex items-center justify-center w-[50px] h-[40px] bg-[#2563EB] text-white border rounded-md cursor-pointer">Add</button>
                    </div>
                </form>
            </div>

        </div>
    )
}