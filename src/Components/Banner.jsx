import { NavLink } from 'react-router-dom';
import img1 from '../assets/img1.png' 

const Banner = () => {
    return (
     <div className="mt-10">
    <div className="  bg-rose-50  rounded-xl mx-14 h-[554px] w-[1170px] " >
    
    <div className="flex ">
       
       <div className="">
       <h1 className="text-6xl font-extrabold mt-48 ml-20 font-serif ">Books to freshen up <br />  your bookshelf</h1>
       <NavLink to={'/list-book'} href="" > <button  className="btn bg-[#23BE0A] text-white ml-20 mt-5"> View The List</button></NavLink>
       </div>
        <div className=" my-20 ml-6"><img src={img1} alt="" /></div>
      
       </div>
       

</div>
     </div>
    );
};

export default Banner;