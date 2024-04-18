import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops Not Found</h2>
            <h4>{error.error.message}</h4>
            <h4>{error.status}  {error.statusText}</h4>
        </div>
    );
};

export default ErrorPage;