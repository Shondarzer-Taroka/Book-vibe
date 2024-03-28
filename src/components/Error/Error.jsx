import { Link, useNavigate } from "react-router-dom";


const Error = () => {
    let navigate= useNavigate()

    function goBack() {

        navigate(-1)
    }
    return (
        <div className=" text-center">
            <h1 className="text-4xl text-center font-bold mt-8">Not Found Page</h1>
            <Link to={'/'}> <button className="btn btn-info mt-6">Go Home</button></Link>
            <button onClick={goBack} className="btn btn-info ml-2"> Go Back</button>
           
        </div>
    );
};

export default Error;