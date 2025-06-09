import axios from "axios";

const API = "http://localhost:3000/";

export const loginApi = async (username, password) => {
    const loginURL = API + "login";
    try {
        const res = await axios.post(loginURL, {
            username,
            password,
        });

        return res;
    } catch (error) {
        console.log(error);
    }

    return null;
};

export const registerApi = async (firstname, lastname, username, password) => {
    const registerURL = API + "register";
    try {
        const res = await axios.post(registerURL, {
            firstname,
            lastname,
            username,
            password,
        });

        return res;
    } catch (error) {
        console.log(error);
    }

    return null;
};
