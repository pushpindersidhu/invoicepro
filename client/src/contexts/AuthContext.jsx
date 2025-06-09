import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/authService";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refreshToken");
        const user = localStorage.getItem("user");

        if (token && refreshToken && user) {
            setToken(token);
            setRefreshToken(refreshToken);
            setUser(JSON.parse(user));
        }

        setReady(true);
    }, []);

    const login = async (username, password) => {
        const res = await loginApi(username, password);
        if (!res) return;

        setToken(res.data.token);
        setRefreshToken(res.refreshToken);
        setUser({ id: res.data.id, username: res.data.username });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem(
            "user",
            JSON.stringify({
                id: res.data.id,
                username: res.data.username,
            })
        );

        navigate("/");
    };

    const register = async (firstname, lastname, username, password) => {
        const res = await registerApi(firstname, lastname, username, password);
        if (!res) return;

        alert("Welcome! ", res.data.username);

        navigate("/login");
    };

    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        setToken("");
        setRefreshToken("");
        setUser(null);

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                refreshToken,
                user,
                login,
                register,
                isLoggedIn,
                logout,
                setToken,
                setRefreshToken,
            }}
        >
            {ready ? children : null}
        </AuthContext.Provider>
    );
};
