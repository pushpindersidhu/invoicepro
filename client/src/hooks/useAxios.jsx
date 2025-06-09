import useAuth from "./useAuth";
import isJWTExpired from "../utils/isJWTExpired";
import axios from "axios";

export const BASE_URL = "http://localhost:3000/";

const useAxios = () => {
    const { token, refreshToken, setToken } = useAuth();

    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: `Bearer: ${token}` },
    });

    axiosInstance.interceptors.request.use(async (req) => {
        if (!isJWTExpired(token)) return req;

        const res = await axios.post(`${BASE_URL}refresh`, {
            refreshToken,
        });

        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);

        req.headers.Authorization = `Bearer ${res.data.token}`;
        return req;
    });

    return axiosInstance;
};

export default useAxios;
