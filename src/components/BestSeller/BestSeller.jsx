import { FaStar, FaStarAndCrescent } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const BestSeller = () => {
    let bestSellerBooks=useLoaderData()
    console.log(bestSellerBooks);
   return (
     <>
     <h1 className="text-3xl font-bold text-center my-5">Best seller Books</h1>
       <section className="max-w-6xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
       
           {
             bestSellerBooks.map((value,indx)=>{
                 return(
                     
    
       
         <div className="border-2 rounded-2xl " key={indx}>
         <div className="p-3 space-y-3">
             <div className="bg-[#f3f3f3] rounded-xl flex items-center justify-center h-[400px]">
                 <img className=" py-3 px-3 h-full w-full" src={value.image} alt="" />
             </div>
             <div id="text-content" className="space-y-3">
                 <h3 className="text-2xl font-bold h-[110px]">{value.product_name}</h3>
       
                 <div className="h-[1px] border-[1px] border-dashed border-[#cfcdcdcc]"></div>
              
                  <div className="flex gap-1 items-center"> 
                    <span>Ratings </span>
                      <FaStar></FaStar>
                      ({value.ratings})
                   </div>
             
             </div>
         </div>
  
         </div>


                       
                        
                    )
                })
            }
        </section>
    
        </>
    //     <Link to={''} className="">

    //         <div id="container" className="bg-red-500 max-w-6xl mx-auto">
    //         <div className="border-2 rounded-2xl ">
    //         <div className="p-3 space-y-3">
    //             <div className="bg-[#f3f3f3] rounded-xl flex items-center justify-center">
    //                 <img className=" py-8" src={'image'} alt="" />
    //             </div>


    //             <div id="text-content" className="space-y-3">

    //                 <h3 className="text-2xl font-bold">{'bookName'}</h3>
              
    //                 <div className="h-[1px] border-[1px] border-dashed border-[#cfcdcdcc]"></div>
                     
    //                  <div> <p>rating</p></div>
                    
    //             </div>

    //         </div>
    //     </div>
    //         </div>

       
    // </Link>
    );
};

export default BestSeller;