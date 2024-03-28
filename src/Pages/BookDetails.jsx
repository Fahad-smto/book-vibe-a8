 
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookRequest } from '../utility/localstorage';


const BookDetails = () => {
  
 
    // const [bookDetails,setBook] =useState([]);
    // useEffect(()=>{
    //     fetch('books.json')
    //     .then(res =>res.json())
    //     .then(data =>setBook(data));
    // })
      
    const books = useLoaderData()
    const {id} = useParams();
    const book = books.find(book =>book.bookId==id);
 
    const handleToast = ()=>{
        toast('added successfully')
        saveBookRequest(book.bookId)
       
    }
    //  const book = bookDetails.find(book =>book.id===)
 
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={book.image} alt="" className=" mt-10 ml-20 w-96 h-64 rounded sm:h-96 lg:col-span-7 mdark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl ">{book.bookName}</h3>
				<span className=" ">by: {book.author}</span>
				<div className="divider"></div>
                <p> {book.category}</p>
				<div className="divider"></div>
                <p><span className='font-bold text-2xl'>Review :</span> {book.review}</p>
                <p className='gap-4'><span>Tags:</span> {book.tags} </p>
                <div className="divider"></div>
                <p> <span className='mr-3'>Number of Pages: </span>  {book.totalPages} </p>
                <p> <span className='mr-3'>Publisher: </span>  {book.publisher} </p>
                <p> <span className='mr-3'>Year of Publishing: </span>  {book.yearOfPublishing} </p>
                <p> <span className='mr-3'>Rating: </span>  {book.rating} </p>
               <div className=" ">
               <button onClick={handleToast} className='btn btn-primary '>Read</button>
                <button  onClick={handleToast} className='btn btn-success ml-4'>Wishlist</button>
               </div>
			</div>
		</div>
	
	</div>
    <ToastContainer />
</section>
    );
};

export default BookDetails;