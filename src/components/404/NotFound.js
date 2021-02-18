import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => {
        document.title = "Halaman tidak ada | SMANDA";
    }, []);

    return (
        <div className="mt-4 mb-4 text-center mx-auto">
            <h1>Not Found</h1>
            <p>Kaga ada woiii 💁🏻</p>
            <Link to="/">Kembali ke jalan yang benar yuk</Link>
        </div>
    );
};

export default NotFound;
