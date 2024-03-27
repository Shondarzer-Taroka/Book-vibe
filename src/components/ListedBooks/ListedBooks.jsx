
// import { FaFileContract, FaPager } from 'react-icons/fa6';
import { useEffect, useRef, useState } from "react";
import { getLocalStorage, go, saveItem } from '../Utilities/utility';
import { Link, useLoaderData } from 'react-router-dom';
import { IoPeopleOutline } from "react-icons/io5";
import { LuFileBarChart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { wishgetLocalStorage } from '../Utilities/wishlist';
import { FaAngleDown } from "react-icons/fa";


const ListedBooks = () => {
    let readSection = useRef()
    let wishlist = useRef()
    let btn1 = useRef()
    let btn2 = useRef()
    let ul=useRef()
    let [text, setText] = useState('')
    let book = useLoaderData()
    let [readperBook, setreadPerBook] = useState([])
    let [wishPerBook, setWishPerBook] = useState([])





    useEffect(() => {
        let items = getLocalStorage()

        let newArray = []
        for (const key of items) {

            let perBook = book.find(item => item.bookId == key)
            // console.log(perBook);
            if (perBook) {
                newArray.push(perBook)
            }

        }
        setreadPerBook(newArray)

    }, [book])


    useEffect(() => {
        let items = wishgetLocalStorage()
        let newArray = []
        for (const key of items) {
            let perBook = book.find(item => item.bookId == key)
            // console.log(perBook);
            if (perBook) {
                newArray.push(perBook)
            }
        }
        setWishPerBook(newArray)
    }, [book])

    // console.log(perBook);



    function pageHandled(e) {
        let t = e.target.innerText
        setText(t)
        //    console.log(t);
        let sortArray = []
        if (!wishlist.current.classList.contains('hidden')) {
            sortArray = [...wishPerBook]
            sortArray.sort((a, b) => {
                return a.totalPages - b.totalPages
            })
            setWishPerBook(sortArray)
        }
        else {

            sortArray = [...readperBook]
            sortArray.sort((a, b) => {
                return a.totalPages - b.totalPages
            })
            setreadPerBook(sortArray)

        }
    }

    // console.log(text);




    function yearHandled(e) {
        let t = e.target.innerText
        setText(t)
        let k=e.target.parentElement.parentElement
        k.classList.add('hidden')
        console.log(k);
        let sortArray = []
        if (!wishlist.current.classList.contains('hidden')) {
            sortArray = [...wishPerBook]
            sortArray.sort((a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing
            })
            setWishPerBook(sortArray)
        }
        else {

            sortArray = [...readperBook]
            sortArray.sort((a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing
            })
            setreadPerBook(sortArray)

        }
    }




    function ratingHandled(e) {
        let t = e.target.innerText
        setText(t)
        let sortArray = []
        if (!wishlist.current.classList.contains('hidden')) {
            sortArray = [...wishPerBook]
            sortArray.sort((a, b) => {
                return a.rating - b.rating
            })
            setWishPerBook(sortArray)
        }
        else {

            sortArray = [...readperBook]
            sortArray.sort((a, b) => {
                return a.rating - b.rating
            })
            setreadPerBook(sortArray)

        }
    }
   
    // document.getElementById('l').nextElementSibling
   

    function dropdownFunc(e) {
        // console.log(e.target.nextElementSibling);
        // ul.current.classList.remove('hidden')
        ul.current.classList.remove('hidden');
    }





    function button1() {
        console.log(btn1.current);
        // btn1.current.classList.add('border-b-2')
        btn1.current.classList = 'border-t-2 border-l-2 border-r-2 px-4 py-2 w-[140px]'
        btn2.current.classList = 'border-b-2 border-l-0 border-r-0 px-4 py-2 w-[140px]'
        readSection.current.classList.remove('hidden')
        wishlist.current.classList.add('hidden')

    }

    function button2() {
        btn1.current.classList = 'border-b-2 border-l-0 border-r-0 px-4 py-2 w-[140px]'
        btn2.current.classList = 'border-t-2 border-l-2 border-r-2 px-4 py-2 w-[140px]'
        readSection.current.classList.add('hidden')
        wishlist.current.classList.remove('hidden')

    }
    // console.log(current.btn1,btn2);
    return (
        <section id='main-section' className="max-w-6xl mx-auto">

            <div id="Book-title" className="text-center mb-[14%]">
                <h2 className="font-bold text-2xl  mt-7 p-5 bg-gray-100 rounded-xl">Books</h2>
                <details onClick={dropdownFunc} className="dropdown">
                    <summary className="m-1 btn  bg-green-400">
                        <div className="flex items-center ">
                            <p>{text==''?'sort by': text}</p>
                        <FaAngleDown />
                        </div>
                         </summary>
                    <ul ref={ul} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>sort by</a></li>
                        <li onClick={ratingHandled}><a>rating</a></li>
                        <li onClick={pageHandled}><a>Number of pages</a></li>
                        <li onClick={yearHandled}><a>Publish of year</a></li>
                    </ul>
                </details>

                

                {/* <form className="mt-8">
                   
                    <select name="cars" id="cars" className=" bg-green-400 p-4 font-semibold outline-none text-white border-none">
                        <option className="bg-white text-black font-normal" value="sort by">sort by</option>
                        <option onClick={ratingHandled} className="bg-white text-black font-normal" value="rating">rating</option>
                        <option className="bg-white text-black font-normal" value="Number of pages">Number of pages</option>
                        <option className="bg-white text-black font-normal" value="Publish of year">Publish of year</option>
                    </select>
                    
                     
                        </form> */}
                    </div>


                        {/* button */}


                        <div className='flex '>

                            <div className='flex  items-end'>
                                <button onClick={button1} ref={btn1} className='border-t-2 border-l-2 border-r-2 px-4 py-2 w-[140px]'>Read Books</button>
                                <button onClick={button2} ref={btn2} className='border-b-2 px-4 py-2 w-[140px]'>Wishlist Books</button>
                            </div>

                            <div className="h-[42px] border-b-[2px] border-solid border-[#cfcdcdcc] w-full"></div>

                        </div>

                        {/* button ends */}



                        <div id="read-wishlist-section" >

                            {/* read section starts */}

                            <div id="read" ref={readSection} className='mt-6'>

                                {
                                    readperBook.map((value, index) => {

                                        return (
                                            <div key={value.bookId} className='border-2 rounded-2xl mt-6'>
                                                <div className='flex flex-col md:flex-row items-center gap-4 p-3'>
                                                    <div className='bg-gray-100 rounded-xl w-full md:w-max lg:w-auto'>
                                                        <img className='p-4 w-[70%] md:w-auto' src={value.image} alt="" />
                                                    </div>

                                                    <div id='content-section' className='w-[80%] space-y-2'>
                                                        <h2 className='font-bold text-3xl'>{value.bookName}</h2>
                                                        <p>By : {value.author}</p>

                                                        <div className="flex flex-col md:flex-row gap-2"> 
                                                            
                                                        <div id='tags' className='flex  gap-6'>
                                                {value.tags.map(tag => <p key={''} className="bg-[#f4fcf3] font-semibold py-1 px-2 rounded-full text-[#4dcb39]">#{tag}</p>)}                                                        
                                                        </div>

                                                        <div className='flex items-center gap-1'>
                                                                <IoLocationOutline />
                                                                <p>Year of Publishing: {value.yearOfPublishing} </p>
                                                            </div>

                                                        </div>
                                                       

                                                        <div className='flex gap-6'>
                                                            <div className='flex gap-1 items-center'>
                                                                <IoPeopleOutline />
                                                                <span>Publisher: {value.publisher}</span>
                                                            </div>
                                                            <div className='flex items-center gap-1'>

                                                                <LuFileBarChart />
                                                                <span>Pages: {value.totalPages}</span>
                                                            </div>
                                                        </div>
                                                        <div className="h-[1px] border-[1px] border-solid border-[#cfcdcdcc] w-full"></div>

                                                        <div className='mt-2 flex flex-col md:flex-row gap-3' >
                                                            <button className='rounded-full py-1 w-[max-content] px-3 text-[#4799ff] font-semibold bg-[#e0eeff] flex items-center'>Category: {value.category}</button>
                                                            <button className='rounded-full py-1 w-[max-content] px-3 text-[#ffb549] font-semibold bg-[#fff3e0] flex items-center'>Rating: {value.rating}</button>

                                                            <Link to={`/book/${value.bookId}`}> <button className='bg-[#23BE0A] text-white flex items-center font-semibold rounded-full py-2 px-3'>view details</button></Link>

                                                        </div>


                                                    </div>
                                                </div>


                                            </div>)
                                    })
                                }

                                {/* <section id="read-book"> */}
                                {/* </section> */}

                            </div>



                            {/* read section ends */}





                            {/* wishlist container starts */}

                            <div id='wishlist' ref={wishlist} className=' mt-6 hidden'>

                                {
                                    wishPerBook.map((value, index) => {
                                        return (
                                            <div key={index + 1} className='border-2 rounded-2xl mt-6'>
                                                <div className='flex items-center gap-4 p-3'>
                                                    <div className='bg-gray-100 rounded-xl'>
                                                        <img className='p-4' src={value.image} alt="" />
                                                    </div>



                                                    <div id='content-section' className='w-[80%] space-y-2'>
                                                        <h2 className='font-bold text-3xl'>{value.bookName}</h2>
                                                        <p>By : {value.author}</p>
                                                        <div id='tags' className='flex gap-6'>

                                                            {value.tags.map(tag => <p key={''} className="bg-[#f4fcf3] font-semibold py-1 px-2 rounded-full text-[#4dcb39]">#{tag}</p>)}

                                                            <div className='flex items-center gap-1'>
                                                                <IoLocationOutline />
                                                                <p>Year of Publishing: {value.yearOfPublishing} </p>
                                                            </div>

                                                        </div>

                                                        <div className='flex gap-6'>
                                                            <div className='flex gap-1 items-center'>
                                                                <IoPeopleOutline />
                                                                <span>Publisher: {value.publisher}</span>
                                                            </div>
                                                            <div className='flex items-center gap-1'>
                                                                {/* <FaFileContract></FaFileContract> */}
                                                                <LuFileBarChart />
                                                                <span>Pages: {value.totalPages}</span>
                                                            </div>
                                                        </div>
                                                        <div className="h-[1px] border-[1px] border-solid border-[#cfcdcdcc] w-full"></div>

                                                        <div className='mt-2 flex gap-3' >
                                                            <p className='rounded-full py-1 px-3 text-[#4799ff] flex items-center font-semibold bg-[#e0eeff]'>Category: {value.category}</p>
                                                            <p className='rounded-full py-1 px-3 text-[#ffb549] flex items-center font-semibold bg-[#fff3e0]'>Rating: {value.rating}</p>

                                                            <button className='bg-[#23BE0A] text-white font-semibold rounded-full py-2 px-3 flex items-center'>view details</button>
                                                        </div>


                                                    </div>
                                                </div>


                                            </div>

                                        )
                                    })}


                                {/*  */}
                            </div>

                        </div>
                    </section>

                    );
};

                    export default ListedBooks;