import {  NavLink } from "react-router-dom";

 

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
        <NavLink to='/'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>Home
        </NavLink>
        <NavLink to='/list-book'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>Listed Books
        </NavLink>
        <NavLink to='/page-to-read'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>Pages to Read
        </NavLink>
        <NavLink to='/comics'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}> Comics
        </NavLink>
        <NavLink to='/about'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>About
        </NavLink>
         
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Lagbe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    <NavLink to='/'
        className={({isActive})=> isActive ? 'text-success border bg-green-50  rounded-sm font-bold':'font-bold'}>Home
        </NavLink>
        <NavLink to='/list-book'
        className={({isActive})=> isActive ? 'text-success border bg-green-50   rounded-sm font-bold':'font-bold'}>Listed Books
        </NavLink>
        <NavLink to='/page-to-read'
        className={({isActive})=> isActive ? 'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>Pages to Read
        </NavLink>
        <NavLink to='/comics'
        className={({isActive})=> isActive ? 'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}> Comics
        </NavLink>
        <NavLink to='/about'
        className={({isActive})=> isActive ?  'text-success border bg-green-50    rounded-sm font-bold':'font-bold'}>About
        </NavLink> 
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn bg-[#23BE0A] text-white">Sing in</a>
    <a className="btn bg-[#59C6D2] text-white">Sing up</a>
  </div>
</div>
    );
};

export default NavBar;