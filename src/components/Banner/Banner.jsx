import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-around items-center py-16 bg-[#f3f3f3] rounded-xl ">
            <div id="text-content" className="">
                <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <Link to={'/listed'} className="mt-3"> 
                 <button className="bg-[#23BE0A] p-3 mt-3 text-white font-bold rounded-xl">View The List</button>
                </Link>
               
            </div>
            <img src="https://i.ibb.co/4gJ89CW/hunger-1.png" alt="" />
        </div>
    );
};

export default Banner;