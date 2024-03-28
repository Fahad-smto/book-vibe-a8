import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookRequest } from "../utility/localstorage";
 

const ReadBooks = () => {
    const books = useLoaderData();
    console.log(books);
    const [readBooks, setReadbooks] = useState([]);
    useEffect( ()=>{
        const storeBooks = getStoredBookRequest();
        if(books.length>0){
            const bookRequests =books.filter(book => storeBooks.includes(book.bookId))
           
            setReadbooks(bookRequests);
        }
        
    },[])
    return (
       <div className="w-[900px] h-[50px] mt-10 ml-20 ">

      <div>

      </div>
          {
            readBooks.map(book => <div key={book.id} >
                 

         <div className="card card-side bg-base-100 shadow-xl  mt-6">
      <figure><img src={book.image} alt="Movie"/></figure>
      <div className="card-body">
      <h2 className="card-title">{book.bookName}</h2>
      <p>{book.author}</p>
       <div className="flex">
        <div className="flex"><p className=" font-bold">Tag :</p>{book.tags}</div>
        <div className=" flex "><p className="ml-5 text-xl font-bold">Year of publishing :</p>{book.yearOfPublishing}</div>
       </div>
       <div className="flex">
        <div className="flex"><p className=" font-bold">Publisher :</p>{book.publisher}</div>
        <div className=" flex "><p className="ml-5 font-bold">Page:</p>{book.totalPages}</div>
       </div>

     <div className=" flex gap-5">
      <div className=""> <button className="btn  bg-[#8dafd8]  rounded-full">category : {book.category}</button></div>
      <div className=""> <button className="btn  bg-[#f0d0a0] rounded-full">category : {book.category}</button> </div>
      <div className=""> <button className="btn  bg-[#9ad691] rounded-full">category : {book.category}</button> </div>
     </div>


  </div>
</div>




            </div>)
          }
       </div>
    );
};

export default ReadBooks;