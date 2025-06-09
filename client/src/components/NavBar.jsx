import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="bg-gray-800 p-4">
            {user ? (
                <div className="flex justify-between items-center">
                    <span className="text-white">
                        Welcome, {user.username}!
                    </span>
                    <button
                        onClick={logout}
                        className="text-white hover:text-gray-400"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    <Link
                        to="/login"
                        className="text-white hover:text-gray-400"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-white hover:text-gray-400"
                    >
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
