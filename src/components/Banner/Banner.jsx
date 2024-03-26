import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-around items-center py-11 bg-[#f3f3f3] rounded-xl ">
            <div id="text-content" className="space-y-3">
                <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <Link to={'/listed'}> 
                 <button className="bg-[#23BE0A] p-3 text-white font-bold rounded-xl">View The List</button>
                </Link>
               
            </div>
            <img src="https://i.ibb.co/KX7qJ3x/images.jpg" alt="" />
        </div>
    );
};

export default Banner;