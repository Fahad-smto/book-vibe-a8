import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

 

const ListedBooks = () => {
 
    const [tab ,setTab] = useState(0)

    return (
        <div className="">
            <div className="mt-5">
            <h1 className="text-2xl font-bold bg-slate-200 rounded-lg justify-center flex p-3">Books</h1>
        </div>


		<div className="flex justify-center ">
		<details className="dropdown ">
  <summary className="m-1 btn bg-green-500">Sort</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
		</div>


       <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:  flex-nowrap dark:  dark: ">
	<Link to={`read-book`}  onClick={()=>setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab ===0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
	<Link  to={`wishList`} onClick={()=>setTab(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab ===1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
	
</div>
<Outlet/>
        </div>
    );
};

export default ListedBooks;