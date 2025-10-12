import axios from "axios";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3030",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    validateStatus: () => true
});

axiosInstance.interceptors.response.use(
    (response) => {

        if (response.status === 401) {
            redirect("/login")
        }

        return response
    },

    async (error) => {

        return Promise.reject(error);
    }
)

export default axiosInstance;
