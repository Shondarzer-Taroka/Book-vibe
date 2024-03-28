import { Link, useNavigate } from "react-router-dom";


const Error = () => {
    // let navigate= useNavigate()
    return (
        <div className=" text-center">
            <h1 className="text-4xl text-center font-bold mt-8">No Found Pages</h1>
            <Link to={'/'}> <button className="btn btn-info mt-6">Go Back</button></Link>
           
        </div>
    );
};

export default Error;