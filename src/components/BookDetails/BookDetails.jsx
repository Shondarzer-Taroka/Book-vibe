import { useLoaderData, useParams } from "react-router-dom";
import { getLocalStorage, saveItem } from "../Utilities/utility";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { wishgetLocalStorage, wishsaveItem } from "../Utilities/wishlist";

const BookDetails = () => {
   let [wish,setWish] =useState([])
    let book = useLoaderData()
    let { id } = useParams()
    let idInt = parseInt(id)
    console.log(idInt);
    let perBook = book.find(value => value.bookId == idInt)
    let { bookId, bookName, author, image, review, rating, tags, category, publisher, yearOfPublishing, totalPages } = perBook
    // console.log(perBook);



    function readHandled() {
        let items = getLocalStorage()
        if (items.includes(idInt)) {
            toast.warning('You have already read this book')
        }
        else {
            saveItem(idInt)
            toast('Book added to read list')
        }

    }


    function wishlistHandled() {
       let checkingItems= getLocalStorage() 
       let wishLocal=wishgetLocalStorage()
       let wishExist=wishLocal.find(value=> value==idInt)
       let exist =checkingItems.find(value=> value==idInt)
       if (!exist && !wishExist) {
        wishsaveItem(idInt)
        toast('Book added to wishlist')
       }else{
        toast.warning('You have already read this book')
       }
    }






    return (
        <section className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-4 ">
                <div className="bg-gray-100 flex justify-center items-center rounded-2xl w-[40%]">
                    <img className="py-12" src={image} alt="" />
                </div>


                <div id="content" className="space-y-3 w-[60%]">
                    <h3 className="text-2xl font-bold">{bookName}</h3>
                    <p className="text-xl">By : {author}</p>
                    <div className="h-[1px] border-[1px] border-solid border-[#cfcdcdcc]"></div>

                    <h6 className="text-xl">{category}</h6>
                    <div className="h-[1px] border-[1px] border-solid border-[#cfcdcdcc]"></div>

                    <div id="review" >
                        <span className="font-bold">Review:</span>
                        <span>{review}</span>
                    </div>

                    <div>
                        <span className="font-bold">Tags:</span>
                        {tags.map((value, index) => <span className="bg-[#f4fcf3] font-semibold p-2 rounded-full text-[#4dcb39] ml-2" key={index}>#{value}</span>)}

                    </div>

                    <div className="h-[1px] border-[1px] border-solid border-[#cfcdcdcc]"></div>

                    <div id="pagesCount" className="space-y-2">
                        <div className="flex gap-28">
                            <p>Number of Pages:</p>
                            <p className="font-bold">{totalPages}</p>
                        </div>

                        <div className="flex gap-28">
                            <p>Publisher:</p>
                            <p className="font-bold">{publisher}</p>
                        </div>

                        <div className="flex gap-28">
                            <p>Year of Publishing:</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-28">
                            <p>Rating: </p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <button onClick={readHandled} className="border-2 py-3 px-4 font-bold rounded-xl">Read</button>
                        <button onClick={wishlistHandled} className="py-3 px-4 font-bold rounded-xl bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>

        </section>
    );
};

export default BookDetails;