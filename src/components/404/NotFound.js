import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mt-4 mb-4 text-center mx-auto">
            <h1>Not Found</h1>
            <p>Kaga ada woiii</p>
            <Link to="/">Kembali yuk</Link>
        </div>
    )
}

export default NotFound;