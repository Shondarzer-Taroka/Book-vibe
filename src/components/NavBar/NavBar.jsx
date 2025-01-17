import { NavLink } from "react-router-dom";
import '../Style/link.css'
const NavBar = () => {
    return (
<div className="navbar bg-base-100 max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
 
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
    <li><NavLink to={'/pages'}>Pages to Read</NavLink></li> 
    <li><NavLink to={'/best'}>Best Seller</NavLink></li> 
    <li><NavLink to={'/newbooks'}>New Books</NavLink></li> 
      </ul> 
    </div>
    <a className="btn btn-ghost font-semibold text-xl pl-0 pr-0 md:pr-2 md:font-bold md:text-3xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">

    <div className="op menu menu-horizontal flex items-center gap-6 px-1">
    <NavLink   to={'/'}>Home</NavLink>
    <NavLink  to={'/listed'}>Listed Books</NavLink>
    <NavLink  to={'/pages'}>Pages to Read</NavLink>
    <NavLink to={'/best'}>Best Seller</NavLink>
    <NavLink to={'/newbooks'}>New Books</NavLink>
  
     </div> 

   
  </div>
  <div className="navbar-end md:gap-2">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className=" btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
    );
};

export default NavBar;