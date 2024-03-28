
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    let {bookId,bookName,author,image,review,rating,tags,category}=book
    console.log(book);
    return (
        <Link to={`/book/${bookId}`}>

            <div className="border-2 rounded-2xl">
                <div className="p-3 space-y-3">
                    <div className="bg-[#f3f3f3] rounded-xl flex items-center justify-center">
                        <img className=" py-8" src={image} alt="" />
                    </div>
                    <div id="text-content" className="space-y-3">
                        <div id="tags-sect" className="flex gap-6 flex-wrap md:flex-nowrap">
                            {tags.map((value,index)=> <p  className="bg-[#f4fcf3] font-semibold p-2 rounded-full text-[#4dcb39]" key={index}> {value}</p> )}
                        </div>
                        <h3 className="text-2xl font-bold h-[50px]">{bookName}</h3>
                        <p>By : {author}</p>
                        <div className="h-[1px] border-[1px] border-dashed border-[#cfcdcdcc]"></div>

                        <div id="star" className="flex justify-between">
                            <h6 className="font-semibold">{category}</h6>
                            <div id="icon-star" className="flex gap-2 items-center">
                                <p>{rating}</p>
                                <FaRegStar />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    );
};

export default Book;