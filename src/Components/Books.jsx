import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";
 

const Books = () => {

  const [books,setBooks] = useState([]);


  useEffect(()=>{
  fetch('/books.json')
  .then(res =>res.json())
  .then(data => setBooks(data));
  
  },[])


    return (
        <div>
            <div className="items-center justify-center flex mt-20 md-10 ">
            <h1 className="text-4xl  font-extrabold font-serif mb-5">Books </h1>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {
                    books.map(book =><Book key={books.bookId} book ={book}></Book>)
                }
            </div>
        </div>

    );
};

export default Books;