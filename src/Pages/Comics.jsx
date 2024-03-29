import Comic from "../Components/Comic";
import { useEffect, useState } from "react";

 

const Comics = () => {

  
 
    const [books ,setBooks] = useState([]);

    useEffect(()=>{
        fetch('comics.json')
        .then(res =>res.json())
        .then(data =>setBooks(data));
        
       
    },[])

 


    return (
        <div>
        <div className="items-center justify-center flex mt-20 md-10 ">
        <h1 className="text-4xl  font-extrabold font-serif mb-5 ">COMICS </h1>
        </div>

        <div className=" ml-10 grid grid-cols-3 gap-3">
            {
             books.map(book =><Comic key={books.id } book ={book}></Comic>)
            }
        </div>
    </div>

    );
};

export default Comics;