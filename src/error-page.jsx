import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link src="/" className="backHome"><IoArrowBackCircle size={30} /> Back to homepage</Link>
        </div>
    );
}
