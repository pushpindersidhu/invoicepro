import { useState } from "react";
import Input from "../components/common/Input";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
    const auth = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        auth.register(firstName, lastName, username, password);
    };

    return (
        <div className="flex flex-col justify-center items-center w-1/2 m-auto">
            <h1 className="text-4xl m-2">Register</h1>
            <form onSubmit={onSubmit}>
                <Input
                    className="p-3 border-2 w-full m-2"
                    type={"text"}
                    placeholder={"Last Name"}
                    value={lastName}
                    onChange={onLastNameChange}
                />
                <Input
                    className="p-3 border-2 w-full m-2"
                    type={"text"}
                    placeholder={"First Name"}
                    value={firstName}
                    onChange={onFirstNameChange}
                />
                <Input
                    className="p-3 border-2 m-2 w-full"
                    type={"text"}
                    placeholder={"Username"}
                    value={username}
                    onChange={onUsernameChange}
                />
                <Input
                    className="p-3 border-2 w-full m-2"
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChange={onPasswordChange}
                />
                <input type="submit" className="p-3 border-2 w-full m-2" />
            </form>
        </div>
    );
}

export default RegisterPage;
