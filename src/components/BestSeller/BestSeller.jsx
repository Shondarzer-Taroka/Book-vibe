
import { FaStar } from "react-icons/fa";
import {  useLoaderData } from "react-router-dom";


const BestSeller = () => {
    let bestSellerBooks=useLoaderData()
   let ratingArray=[]
   
    function ratingHandleFunc(ratingCode) {
        for (let i=1;i<=ratingCode;i++){
            ratingArray.push(i)
        }
    }


  
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
                  <div className="flex gap-2 items-center"> 
                    <span className="font-semibold">Ratings: </span>
                     {ratingHandleFunc( value.ratings,ratingArray=[])}
                     <div className="flex text-yellow-400">
                         {ratingArray.map((value,index)=> <FaStar key={index}></FaStar>)}
                     </div>
                      ({value.ratings})
                   </div>
             </div>
         </div>
         </div>
            )})}
        </section>
        </>
    );
};

export default BestSeller;