import { jwtDecode } from "jwt-decode";

export default function isJwtExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp;

        if (!exp) return false;

        const expirationDate = new Date(exp * 1000);
        return expirationDate < new Date();
    } catch (error) {
        console.error("Invalid token", error);
        return true;
    }
}
