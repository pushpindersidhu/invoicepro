import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import NavBar from "../components/NavBar";

function HomePage() {
    const axios = useAxios();
    const [data, setData] = useState("");

    useEffect(() => {
        (async () => {
            const res = await axios.get("/");
            setData(res.data);
        })();
    });

    return (
        <>
            <NavBar />
            Home
            <h1>{data}</h1>
        </>
    );
}

export default HomePage;
