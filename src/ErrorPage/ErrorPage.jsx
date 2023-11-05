import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="items-center text-center my-48 ">
            <h1 className="text-7xl text-secondary">404</h1>
            <h1 className="text-5xl my-7">Opppps! Not Found </h1>
            <Link to="/"><button className="btn btn-secondary">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;