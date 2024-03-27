
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
    let book = useLoaderData()
    let [readperBook, setreadPerBook] = useState([])
    let [wishPerBook, setWishPerBook] = useState([])

    let [order,setOrder]=useState(false)



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
                <details className="dropdown">
                    <summary className="m-1 btn">
                        <div className="flex items-center">
                            <p>sort by </p>
                        <FaAngleDown />
                        </div>
                         </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>sort by</a></li>
                        <li ><a>rating</a></li>
                        <li onClick={''}><a>Number of pages</a></li>
                        <li><a>Publish of year</a></li>
                    </ul>
                </details>
            </div>


            {/* button */}


            <div className='flex '>

                <div className='flex items-end'>
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
                                    <div className='flex items-center gap-4 p-3'>
                                        <div className='bg-gray-100 rounded-xl'>
                                            <img className='p-4' src={value.image} alt="" />
                                        </div>

                                        <div id='content-section' className='w-[80%] space-y-2'>
                                            <h2 className='font-bold text-3xl'>{value.bookName}</h2>
                                            <p>By : {value.author}</p>
                                            <div id='tags' className='flex gap-6'>
                                                {value.tags.map(tag => <p key={''} className="bg-[#cae4c6] font-semibold py-1 px-2 rounded-full text-[#60c960]">#{tag}</p>)}

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

                                            <div className='mt-2 flex gap-3' >
                                                <p className='rounded-full py-1 px-3 text-[#328EFF] font-semibold bg-[#96afce]'>Category: {value.category}</p>
                                                <p className='rounded-full py-1 px-3 text-[#FFAC33] font-semibold bg-[#e2ccab9f]'>Rating: {value.rating}</p>
                                                    
                                                <Link to={`/book/${value.bookId}`}> <button className='bg-[#23BE0A] text-white font-semibold rounded-full py-2 px-3'>view details</button></Link>    
                                               
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
                                <div key={index} className='border-2 rounded-2xl mt-6'>
                                    <div className='flex items-center gap-4 p-3'>
                                        <div className='bg-gray-100 rounded-xl'>
                                            <img className='p-4' src={value.image} alt="" />
                                        </div>



                                        <div id='content-section' className='w-[80%] space-y-2'>
                                            <h2 className='font-bold text-3xl'>{value.bookName}</h2>
                                            <p>By : {value.author}</p>
                                            <div id='tags' className='flex gap-6'>

                                                {value.tags.map(tag => <p key={''} className="bg-[#cae4c6] font-semibold py-1 px-2 rounded-full text-[#60c960]">#{tag}</p>)}

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
                                                <p className='rounded-full py-1 px-3 text-[#328EFF] font-semibold bg-[#96afce]'>Category: {value.category}</p>
                                                <p className='rounded-full py-1 px-3 text-[#FFAC33] font-semibold bg-[#e2ccab9f]'>Rating: {value.rating}</p>

                                                <button className='bg-[#23BE0A] text-white font-semibold rounded-full py-2 px-3'>view details</button>
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