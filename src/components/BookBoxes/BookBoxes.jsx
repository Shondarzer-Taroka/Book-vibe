import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BookBoxes = () => {
    let [bookBoxes,setBookBoxes]=useState([])
    useEffect(()=>{
        fetch('/books.json')
        .then(res=> res.json())
        .then(data => setBookBoxes(data))
    },[])
    return (
        <section className=" mt-8">
            <h3 className="font-bold text-3xl text-center mb-4">Books</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

            {
                bookBoxes.map((value,indx)=> <Book key={indx} book={value}></Book>)
            }


            {/* <Book></Book> */}
        </div>
        </section>
        );
};

export default BookBoxes;