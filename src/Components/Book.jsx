import { Link } from "react-router-dom";

 

const Book = ({book}) => {
    const {author,image,bookName,category,rating,bookId} =book;
    return (
        <Link to={`/book/${bookId}`}
        
        className="card w-96 ml-4 bg-base-100 shadow-xl border rounded-lg transition border-2 hover:scale-105  hover: border-opacity-30">
  <div className=" p-3  ">
  <figure className="px-10 pt-10  bg-[#F3F3F3] rounded-lg p-2 ">  
   <img  src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  </div>
  <div className="card-body ">
    <div className="flex gap-5">
        <div className="text-green-500 font-serif   bg-green-50 rounded-full p-3">Young Adult</div>
        <div className="text-green-500 font-serif   bg-green-50 rounded-full    p-3">Identity</div>
    </div>
    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
    <p>{author}</p>
    <div className="divider"></div>
    <div className="card-actions flex justify-between ">
       <div className="">{category}</div>
       <div className="">{rating}</div>
    </div>
  </div>
</Link>
    );
};

export default Book;