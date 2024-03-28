import { useLoaderData } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const NewBooks = () => {
   
        let books=useLoaderData()
        return (
            <> 
    
            <h1 className="text-3xl font-bold text-center my-14">New Books Published</h1>
    
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto ">
                {
                    books.map((value,index)=>{
                        return(
                        <div key={index}>
                <div className="p-4 rounded-xl bg-slate-200">
                    <div className="w-auto h-[450px]">
                         <img className="w-full h-full" src={value.image} alt="" />
                    </div>
                  
    
                <div id="content">
                   <h1 className="md:h-[126px] lg:h-[130px] text-center text-xl font-bold">{value.name}</h1>
                   <div className="text-center flex justify-center">
                   <button className="flex gap-2 text-center items-center text-2xl font-bold bg-green-400 text-white p-2 px-5 rounded-xl"> <span>buy</span> <BsCart /> </button>
                   </div>
                </div>
                </div>
    
            </div>   
                        )
                    })
                }
    
            </section>
      
            </> );
};

export default NewBooks;