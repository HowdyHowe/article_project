import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 202 && response.data?.data?.newAccessToken) {
            const newToken = response.data?.data?.newAccessToken;
            localStorage.setItem("accessToken", newToken);

            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        }

        return response
    },

    async (error) => {

        return Promise.reject(error);
    }
)

export default axiosInstance;
